import { useDisclosure } from '@nextui-org/react';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import React, { useContext } from 'react';
// import { FaRegTrashAlt } from 'react-icons/fa';

import EventModal from './EventModal';

import CalendarContext from '@/contexts/CalendarContext';
import { getCurrentDayClass } from '@/functions/get-current-day-class';
import dayjs, { Dayjs } from 'dayjs';

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
                <Popover key={i} placement="top" color="primary">
                  <PopoverTrigger>
                    <span
                      className={`bg-${ev.label}-500 rounded-md px-2 p-1 text-white cursor-pointer`}
                    >
                      {ev.title}
                    </span>
                  </PopoverTrigger>
                  <PopoverContent
                    className={`bg-${ev.label}-500 rounded-md z-50`}
                  >
                    <div className="p-2 w-full block z-50">
                      <header className="flex justify-between items-center">
                        <div className="text-small font-bold">{ev.title}</div>
                        {/*  <button className="">
                          <FaRegTrashAlt />
                        </button> */}
                      </header>
                      <div className="text-tiny">
                        <p>
                          {dayjs(ev.day)
                            .locale('pt-br')
                            .format(`dddd, DD MMMM`)}
                        </p>
                        <p>{ev.location}</p>
                        <p>{ev.description}</p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                //     <div
                //       key={i}
                //       className={`bg-${ev.label}-500 rounded-md px-2 p-1 text-white cursor-pointer`}
                //     >
                //       {ev.title}
                //     </div>
                //   )
              )
            );
          })}
        </section>
      </div>

      <EventModal day={day} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
