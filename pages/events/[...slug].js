import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../data/dummy-data';

function FilteredEventsPage() {
  const router = useRouter();

  const routePaths = router.query.slug;
  if (!routePaths) {
    return <p className='center'>Loading...</p>;
  }

  const [year, month] = routePaths;

  if (!year || !month) {
    return <p className='center'>Loading...</p>;
  }

  if (isNaN(year) || isNaN(month)) {
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

  const reqYear = +year;
  const reqMonth = +month;

  if (reqYear > 2030 || reqYear < 2021 || reqMonth < 1 || reqMonth > 12) {
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

  const events = getFilteredEvents({
    year: reqYear,
    month: reqMonth,
  });

  if (!events || events.length === 0) {
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

  const date = new Date(reqYear, reqMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
  return <div></div>;
}

export default FilteredEventsPage;
