import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { Header } from './components/Header';
import { Week } from './components/Week';
import { useCalendar } from './hooks/useCalendar.tsx';
import { Background } from './components/Background.tsx';

// day extend
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

export const Calendar = () => {
  // hook
  const { viewDate, onChangeViewDate, dates, bgRef } = useCalendar();

  return (
    <>
      <Background ref={bgRef} />
      <Header viewDate={viewDate} onChangeViewDate={onChangeViewDate} />
      <Week />
      {dates}
    </>
  );
};
