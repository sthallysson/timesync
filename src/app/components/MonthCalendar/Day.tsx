import React from 'react';

import dayjs, { Dayjs } from 'dayjs';

interface DayProps {
  day: Dayjs;
  style?: string;
}

export default function Day({ day, style }: DayProps) {
  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-green-700 text-white rounded-full w-7 h-7'
      : '';
  }
  return (
    <div
      className={`border sm:h-24 h-16 sm:px-4 sm:py-2 text-xs px-2 py-1 bg-[#F5F5F5] border-gray-300 flex justify-center rounded-lg ${style}`}
    >
      <p
        className={`text-sm p-1 text-center font-semibold ${getCurrentDayClass()}`}
      >
        {day.format('DD')}
      </p>
    </div>
  );
}
