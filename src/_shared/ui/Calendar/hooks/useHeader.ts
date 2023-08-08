import { Dayjs } from 'dayjs';

export function useHeader() {
  // handler
  const onClickPrev = (day: Dayjs, setDay: (day: Dayjs) => void) => {
    setDay(day.subtract(1, 'month'));
  };

  const onClickNext = (day: Dayjs, setDay: (day: Dayjs) => void) => {
    setDay(day.add(1, 'month'));
  };

  return {
    onClickPrev,
    onClickNext,
  };
}
