'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';

export function MonthCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

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
          className="border sm:h-24 h-16 sm:px-4 sm:py-2 text-xs px-2 py-1 border-gray-300 text-gray-400 font-semibold "
        >
          <div
            className={`rounded-full sm:w-6 sm:h-6 w-4 h-4 flex justify-center items-center font-semibold`}
          >
            {day}
          </div>
        </div>,
      );
    });

    for (let i = 1; i <= dayInMonth; i++) {
      const isToday =
        currentDate.getDate() === i &&
        currentDate.getMonth() === new Date().getMonth();

      calendarDays.push(
        <div
          key={i}
          className="border sm:h-24 h-16 sm:px-4 sm:py-2 text-xs px-2 py-1 border-gray-300   "
        >
          <div
            className={`${
              isToday && 'bg-green-500 p-2'
            } rounded-full sm:w-6 sm:h-6 w-4 h-4 flex justify-center items-center font-semibold text-xs`}
          >
            {i}
          </div>
        </div>,
      );
    }

    nextMonthDays.forEach((day) => {
      calendarDays.push(
        <div
          key={`next-${day}`}
          className="border sm:h-24 h-16  sm:px-4 sm:py-2  text-xs px-2 py-1 border-gray-300 text-gray-400 font-semibold "
        >
          <div
            className={`rounded-full sm:w-6 sm:h-6 w-4 h-4 flex justify-center items-center font-semibold`}
          >
            {day}
          </div>
        </div>,
      );
    });

    return calendarDays;
  };

  return (
    <main className="grid gap-2 m-5">
      <div className="flex gap-2 items-center">
        <Button
          onClick={() =>
            setCurrentDate(
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1,
              ),
            )
          }
          className="bg-green-500 font-semibold font-mono"
        >
          Prev
        </Button>

        <h2 className="font-semibold font-mono w-40 text-center">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>

        <Button
          onClick={() =>
            setCurrentDate(
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1,
              ),
            )
          }
          className="bg-green-500 font-semibold font-mono "
        >
          Next
        </Button>
      </div>

      <section className="grid grid-cols-7 bg-[#F5F5F5] shadow-md shadow-gray-300 max-w-2xl">
        {daysOfWeek.map((day) => (
          <header
            key={day}
            className="border text-left sm:px-4 sm:py-2 sm:text-base text-xs px-2 py-1 border-gray-300 font-semibold"
          >
            <span>{day}</span>
          </header>
        ))}
        {renderCalendar()}
      </section>
    </main>
  );
}
