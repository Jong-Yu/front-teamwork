import { useEffect, useMemo, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { debounce } from 'lodash';

interface UseCalendarProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
}

export function useCalendar({ value, onChange }: UseCalendarProps) {
  // state
  const [viewDate, setViewDate] = useState(dayjs());
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  // ref
  const selectedDateRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // handler
  const onChangeViewDate = (day: Dayjs) => {
    if (!open) setOpen(true);
    setViewDate(day);
  };

  const onChangeSelectDate = (day: Dayjs) => {
    onChange(day);
    setOpen(prev => !prev);
  };

  const onChangeResize = debounce(() => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    if (bgRef.current === null) return;
    if (selectedDateRef.current === null) {
      bgRef.current.style.display = 'none';
      return;
    }

    if (bgRef.current.style.transform === '') {
      bgRef.current.style.display = 'none';
    }

    const x = selectedDateRef.current.offsetLeft - (open ? 3 : 4);
    const y = selectedDateRef.current.offsetTop - (open ? 23 : 53);

    bgRef.current.style.transition = 'transform 0.3s';
    bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    bgRef.current.style.display = 'block';
  }, [viewDate, value, selectedDateRef, bgRef, width]);

  useEffect(() => {
    window.addEventListener('resize', onChangeResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', onChangeResize);
    };
  }, []);

  // 캘린더 생성 함수
  const dates = useMemo(() => {
    // 해당 월의 시작 주와 끝 주 계산
    const startWeek = viewDate.startOf('month').week();
    const endWeek =
      // 12월의 마지막 주가 목요일 이후라면 1을 반환하기 때문에 53주차로 변경
      viewDate.endOf('month').week() === 1
        ? 53
        : viewDate.endOf('month').week();
    const calendar: Dayjs[][] = [];

    if (open) {
      // 캘린더 행 생성
      for (let week = startWeek; week <= endWeek; week++) {
        const currentWeek = viewDate.startOf('week').week(week);
        if (viewDate.format('MM') === '12' && week === 1) {
          currentWeek.week(week - 52);
        }
        const weekDays = Array.from({ length: 7 }, (_, i) =>
          currentWeek.add(i, 'day'),
        );
        calendar.push(weekDays);
      }
    } else {
      const currentWeek = value.startOf('week');

      const weekDays = Array.from({ length: 7 }, (_, i) =>
        currentWeek.add(i, 'day'),
      );

      calendar.push(weekDays);
    }

    return calendar;
  }, [viewDate, value]);

  return {
    open,
    viewDate,
    value,
    dates,
    bgRef,
    selectedDateRef,
    onChangeViewDate,
    onChangeSelectDate,
  };
}
