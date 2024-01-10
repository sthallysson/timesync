import dayjs, { Dayjs } from 'dayjs';

export function getCurrentDayClass(day: Dayjs) {
  return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
    ? 'bg-[#1B4332] text-white rounded-full w-7 h-7'
    : '';
}
