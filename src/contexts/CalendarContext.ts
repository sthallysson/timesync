/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

const CalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
});

export default CalendarContext;
