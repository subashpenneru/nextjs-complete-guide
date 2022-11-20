import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../data/dummy-data';

function FilteredEventsPage({ hasError, events, year, month }) {
  if (!hasError && !events) {
    return <p className='center'>Loading...</p>;
  }

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  if (events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the choosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
  return <div></div>;
}

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context;

  const [year, month] = slug;

  const reqYear = +year;
  const reqMonth = +month;

  if (
    isNaN(reqYear) ||
    isNaN(reqMonth) ||
    reqYear > 2030 ||
    reqYear < 2021 ||
    reqMonth < 1 ||
    reqMonth > 12
  ) {
    return {
      props: {
        props: { hasError: true },
        // notFound: true,
        // redirect: {
        //   destination: '/error'
        // }
      },
    };
  }

  const events = await getFilteredEvents({ year: reqYear, month: reqMonth });

  return {
    props: {
      events,
      year: reqYear,
      month: reqMonth,
    },
  };
}

export default FilteredEventsPage;
