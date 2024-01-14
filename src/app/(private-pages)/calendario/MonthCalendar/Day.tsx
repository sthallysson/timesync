import { useDisclosure } from '@nextui-org/react';
import React, { useContext } from 'react';

import EventModal from './EventModal';

import CalendarContext from '@/contexts/CalendarContext';
import { getCurrentDayClass } from '@/functions/get-current-day-class';
import { Dayjs } from 'dayjs';

interface DayProps {
  day: Dayjs;
  style?: string;
}

export default function Day({ day, style }: DayProps) {
  //   const [savedEvents, setSavedEvents] = useState<Events[]>([]);
  const { savedEvents } = useContext(CalendarContext);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className={`border sm:h-24 min-h-16 sm:px-4 sm:py-2 text-xs px-2 py-1 bg-[#f8f9fa] border-white flex items-center rounded-lg ${style} flex-col`}
      >
        <p
          className={`text-sm p-1 text-center font-semibold cursor-default ${getCurrentDayClass(
            day,
          )}`}
        >
          {day.format('DD')}
        </p>
        <section className="flex flex-col gap-[1px] w-full overflow-y-scroll no-scrollbar ">
          {savedEvents.map((ev, i) => {
            return (
              ev.day === day.valueOf() && (
                <div
                  key={i}
                  className={`bg-${ev.label}-500 rounded-md px-2 p-1 text-white cursor-pointer`}
                >
                  {ev.title}
                </div>
              )
            );
          })}
        </section>
      </div>

      <EventModal day={day} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
