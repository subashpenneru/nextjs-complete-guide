import { useRouter } from 'next/router';

import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  const onSearchHandler = ({ year, month }) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
