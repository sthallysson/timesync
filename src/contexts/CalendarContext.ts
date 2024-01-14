/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

import { ActionProps, Events } from '@/types/events';

const CalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  dispatchCalEvent: ({ type, payload }: ActionProps) => {},
  savedEvents: [] as Events[],
});

export default CalendarContext;
