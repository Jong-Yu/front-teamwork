import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { Header } from './components/Header';
import { Week } from './components/Week';
import { useCalendar } from './hooks/useCalendar.tsx';
import { Circle } from './components/Circle.tsx';
import { Dates } from './components/Dates.tsx';

// day extend
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

interface CalendarProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
}

export const Calendar = ({ value, onChange }: CalendarProps) => {
  // hook
  const {
    open,
    viewDate,
    dates,
    bgRef,
    selectedDateRef,
    onChangeViewDate,
    onChangeSelectDate,
  } = useCalendar({
    value,
    onChange,
  });

  return (
    <>
      <Circle ref={bgRef} open={open} />
      <Header viewDate={viewDate} onChangeViewDate={onChangeViewDate} />
      <Week open={open} selectWeek={value.day()} />
      <Dates
        open={open}
        dates={dates}
        value={value}
        selectedDateRef={selectedDateRef}
        viewDate={viewDate}
        onChangeSelectDate={onChangeSelectDate}
      />
    </>
  );
};
