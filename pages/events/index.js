import { useRouter } from 'next/router';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage({ events }) {
  const router = useRouter();

  const onSearchHandler = ({ year, month }) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={onSearchHandler} />
      {events && <EventList items={events} />}
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
