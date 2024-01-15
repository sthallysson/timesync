'use client';

import { useContext } from 'react';

import EventListItem from './eventListItem';

import CalendarContext from '@/contexts/CalendarContext';
import dayjs from 'dayjs';

export default function EventList() {
  const { savedEvents } = useContext(CalendarContext);

  return (
    <ul className="p-4">
      {savedEvents.map((ev) => (
        <section key={ev.id}>
          <h2 className="text-lg mb-4">
            {dayjs(ev.day).locale('pt-br').format('DD MMMM')}
          </h2>
          <EventListItem title={ev.title} label={ev.label} />
        </section>
      ))}
    </ul>
  );
}
