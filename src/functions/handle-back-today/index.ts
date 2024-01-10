import dayjs from 'dayjs';

export function handleBackToday(
  monthIndex: number,
  setMonthIndex: (i: number) => void,
) {
  setMonthIndex(
    monthIndex === dayjs().month()
      ? monthIndex + Math.random()
      : dayjs().month(),
  );
}
