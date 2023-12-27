import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';

export function getCalendar(month = dayjs().month()) {
  month = Math.floor(month);
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const year = dayjs().year();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  const lastDayOfMonth = dayjs(new Date(year, month + 1, 0)).day();

  const monthDays: Dayjs[] = [];
  const prevMonthDays: Dayjs[] = [];
  const nextMonthDays: Dayjs[] = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const prevMonthDay = dayjs(new Date(year, month, -i));

    prevMonthDays.push(prevMonthDay);
  }

  for (let i = 1; i < 7 - lastDayOfMonth; i++) {
    const nextMonthDay = dayjs(new Date(year, month + 1, i));

    nextMonthDays.push(nextMonthDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    monthDays.push(dayjs(new Date(dayjs().year(), month, i)));
  }

  return { monthDays, prevMonthDays, nextMonthDays, daysOfWeek };
}
