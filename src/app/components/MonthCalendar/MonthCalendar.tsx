'use client';

import React, { useContext, useEffect, useState } from 'react';

import Day from './Day';
import { getCalendar } from './utils';

import CalendarContext from '@/contexts/CalendarContext';

export default function MonthCalendar() {
  const [currentMonth, setCurrentMonth] = useState(getCalendar());

  const { monthIndex } = useContext(CalendarContext);

  useEffect(() => {
    setCurrentMonth(getCalendar(monthIndex));
  }, [monthIndex]);

  return (
    <main>
      <header className="grid grid-cols-7 bg-green-800  text-white shadow-gray-300 mx-4 border rounded-lg">
        {currentMonth.daysOfWeek.map((day) => (
          <div
            key={day}
            className=" text-center sm:px-4 sm:py-2 sm:text-base text-xs px-2 py-1 border-gray-300 font-semibold"
          >
            <span>{day}</span>
          </div>
        ))}
      </header>
      <div className="grid grid-cols-7  m-4 gap-2">
        {currentMonth.prevMonthDays.map((day, i) => (
          <React.Fragment key={`prev-${i}`}>
            <Day day={day} style="text-gray-400 font-semibold" />
          </React.Fragment>
        ))}
        {currentMonth.monthDays.map((day, i) => (
          <React.Fragment key={i}>
            <Day day={day} />
          </React.Fragment>
        ))}

        {currentMonth.nextMonthDays.map((day, i) => (
          <React.Fragment key={`next-${i}`}>
            <Day day={day} style="text-gray-400 font-semibold" />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
