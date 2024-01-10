import EventList from './eventList';

export default function Agenda() {
  return (
    <>
      <h1 className="text-3xl font-semibold p-4">Agenda</h1>

      <EventList />
      <EventList />
    </>
  );
}
