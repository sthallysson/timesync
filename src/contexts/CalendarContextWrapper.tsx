'use client';

import React, { useEffect, useReducer, useState } from 'react';

import CalendarContext from './CalendarContext';

import { ActionProps, Events } from '@/types/events';
import dayjs from 'dayjs';

interface CalendarContextWrapper {
  children: React.ReactNode;
}

const initialEvents: Events[] = [] as Events[];

function savedEventsReducer(state: Events[], { type, payload }: ActionProps) {
  switch (type) {
    case 'add':
      return [...state, payload];
    case 'update':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'delete':
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents =
    typeof window !== 'undefined' ? localStorage.getItem('savedEvents') : false;
  const parsedEvents: Events[] = storageEvents ? JSON.parse(storageEvents) : [];

  return parsedEvents;
}

export default function CalendarContextWrapper({
  children,
}: CalendarContextWrapper) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    initialEvents,
    initEvents,
  );

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <CalendarContext.Provider
      value={{ monthIndex, setMonthIndex, dispatchCalEvent, savedEvents }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
