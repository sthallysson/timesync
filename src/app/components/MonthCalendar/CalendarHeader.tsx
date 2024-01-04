'use client';

import 'dayjs/locale/pt-br';
import { Button } from '@nextui-org/react';
import React, { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

import Botao from '../NewEventButton';

import CalendarContext from '@/contexts/CalendarContext';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month(),
    );
  }

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <section className="flex gap-2 items-center">
        <Button className="font-semibold rounded-lg" onClick={handleReset}>
          Hoje
        </Button>

        <button
          className="ml-6 hover:bg-gray-100 focus:bg-gray-300 rounded-full flex justify-center items-center p-1"
          onClick={() => setMonthIndex(monthIndex - 1)}
        >
          <IoIosArrowBack className="text-xl" />
        </button>

        <button
          className=" hover:bg-gray-100 focus:bg-gray-300 rounded-full flex justify-center items-center p-1"
          onClick={() => setMonthIndex(monthIndex + 1)}
        >
          <IoIosArrowForward className="text-xl" />
        </button>

        <h2 className="ml-4 text-xl font-bold capitalize">
          {dayjs(new Date(dayjs().year(), monthIndex))
            .locale('pt-br')
            .format('MMMM YYYY')}
        </h2>
      </section>

      <Botao />
    </header>
  );
}
