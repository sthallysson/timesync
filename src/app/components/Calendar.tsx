'use client';

import { useState } from 'react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  const dayInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDay();

  const prevMonthDays: number[] = [];
  const nextMonthDays: number[] = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const prevMonthDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      -i,
    ).getDate();

    prevMonthDays.push(prevMonthDay);
  }

  for (let i = 1; i < 7 - lastDayOfMonth; i++) {
    const nextMonthDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      i,
    ).getDate();

    nextMonthDays.push(nextMonthDay);
  }

  const renderCalendar = () => {
    const calendarDays = [];

    prevMonthDays.forEach((day) => {
      calendarDays.push(
        <div
          key={`prev-${day}`}
          className="border h-20 p-1 border-black bg-gray-400"
        >
          {day}
        </div>,
      );
    });

    for (let i = 1; i <= dayInMonth; i++) {
      calendarDays.push(
        <div key={i} className="border h-20 p-1 border-black">
          {i}
        </div>,
      );
    }

    nextMonthDays.forEach((day) => {
      calendarDays.push(
        <div
          key={`next-${day}`}
          className="border h-20 p-1 border-black bg-gray-400"
        >
          {day}
        </div>,
      );
    });
    return calendarDays;
  };

  console.log(prevMonthDays, nextMonthDays);

  return (
    <div>
      Calendar
      <div className="grid grid-cols-7  m-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="border text-center border-black">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
}
