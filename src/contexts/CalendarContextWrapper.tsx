'use client';

import React, { useState } from 'react';

import CalendarContext from './CalendarContext';

import dayjs from 'dayjs';

interface CalendarContextWrapper {
  children: React.ReactNode;
}

export default function CalendarContextWrapper({
  children,
}: CalendarContextWrapper) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  return (
    <CalendarContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </CalendarContext.Provider>
  );
}
