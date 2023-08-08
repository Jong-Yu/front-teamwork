import { useEffect, useMemo, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { debounce } from 'lodash';
import { Row } from '../components/Row';
import { Date } from '../components/Date';

export function useCalendar() {
  // state
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());
  const [width, setWidth] = useState(window.innerWidth);

  // ref
  const selectedDateRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // handler
  const onChangeViewDate = (day: Dayjs) => {
    setViewDate(day);
  };

  const onChangeSelectDate = (day: Dayjs) => {
    setSelectDate(day);
  };

  const onChangeResize = debounce(() => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    if (selectedDateRef.current === null || bgRef.current === null) return;

    const x = selectedDateRef.current.offsetLeft - 3;
    const y = selectedDateRef.current.offsetTop - 23;

    bgRef.current.style.transition = 'transform 0.3s';
    bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [selectDate, selectedDateRef, bgRef, width]);

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
    const calendar = [];

    // 캘린더 행 생성
    for (let week = startWeek; week <= endWeek; week++) {
      const currentWeek = viewDate.startOf('week').week(week);
      if (viewDate.format('MM') === '12' && week === 1) {
        currentWeek.week(week - 52);
      }
      const weekDays = Array.from({ length: 7 }, (_, i) =>
        currentWeek.add(i, 'day'),
      );
      calendar.push(
        <Row key={week}>
          {weekDays.map(day => {
            const isSelected = selectDate.isSame(day, 'day');
            const isNone = day.format('MM') !== viewDate.format('MM');

            return (
              <Date
                ref={isSelected ? selectedDateRef : null}
                key={day.format('YYYYMMDD')}
                current={day}
                isSelected={isSelected}
                isNone={isNone}
                onClickDate={onChangeSelectDate}
              />
            );
          })}
        </Row>,
      );
    }

    return calendar;
  }, [viewDate, selectDate]);

  return {
    viewDate,
    selectDate,
    dates,
    bgRef,
    onChangeViewDate,
    onChangeSelectDate,
  };
}
