'use client';

import 'dayjs/locale/pt-br';
import { Button } from '@nextui-org/react';
import React, { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

import Botao from '../../../../components/NewEventButton';

import CalendarContext from '@/contexts/CalendarContext';
import { handleBackToday } from '@/functions/handle-back-today';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <section className="flex gap-2 items-center">
        <Button
          className="font-semibold rounded-lg bg-[#f8f9fa]"
          onClick={() => handleBackToday(monthIndex, setMonthIndex)}
          aria-label="Hoje"
        >
          Hoje
        </Button>

        <button
          className="ml-6 hover:bg-gray-100 focus:bg-gray-200 rounded-full flex justify-center items-center p-1"
          onClick={() => setMonthIndex(monthIndex - 1)}
          aria-label="Mês anterior"
        >
          <IoIosArrowBack className="text-xl" />
        </button>

        <button
          className=" hover:bg-gray-100 focus:bg-gray-200 rounded-full flex justify-center items-center p-1"
          onClick={() => setMonthIndex(monthIndex + 1)}
          aria-label="Próximo mês"
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
