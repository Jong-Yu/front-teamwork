import { useState } from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

export const Calendar = () => {
  // day extend
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  const createCalendar = () => {
    const startWeek = viewDate.startOf('month').week();
    const endWeek =
      viewDate.endOf('month').week() === 1
        ? 53
        : viewDate.endOf('month').week();
    const calender = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calender.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = viewDate
                .startOf('week')
                .week(week)
                .add(n + i, 'day');
              if (viewDate.format('MM') === '12') {
                current = viewDate
                  .startOf('week')
                  .week(week - 52)
                  .add(n + i, 'day');
              }
              // 현재 날짜 (기준)
              const isSelected =
                selectDate.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';
              const isNone =
                current.format('MM') === viewDate.format('MM') ? '' : 'none';
              return (
                <>
                  <div className={`box`} key={`${week}_${i}`}>
                    <div
                      className={`text ${isSelected} ${isNone}`}
                      onClick={() => {
                        setSelectDate(current);
                      }}
                    >
                      <div className="flex">
                        <span className={`day`}>{current.format('D')}</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>,
      );
    }
    return calender;
  };

  const changegeMonth = (date: any, changeString: string) => {
    switch (changeString) {
      case 'add':
        return setViewDate(viewDate.add(1, 'month'));
      case 'subtract':
        return setViewDate(viewDate.subtract(1, 'month'));
      default:
        return date;
    }
  };

  return (
    <>
      <StyledHeader>
        <button
          className="previous_icon"
          onClick={() => changegeMonth(viewDate, 'subtract')}
        ></button>
        <span className="thisMonth">{viewDate.format('MM')}월</span>
        <button
          className="next_icon"
          onClick={() => changegeMonth(viewDate, 'add')}
        ></button>
      </StyledHeader>
      <StyledBody>
        <div className="row week">
          <div className="box">
            <span className="text">SUN</span>
          </div>
          <div className="box">
            <span className="text">MON</span>
          </div>
          <div className="box">
            <span className="text">TUE</span>
          </div>
          <div className="box">
            <span className="text">WED</span>
          </div>
          <div className="box">
            <span className="text">THU</span>
          </div>
          <div className="box">
            <span className="text">FRI</span>
          </div>
          <div className="box">
            <span className="text">SAT</span>
          </div>
        </div>
        <div>{createCalendar()}</div>
      </StyledBody>
    </>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;

  .thisMonth {
    font-weight: 700;
    color: #292929;
    line-height: 24px;
    user-select: none;
  }
  button {
    width: 24px;
    margin: 0 8px;
  }
  .previous_icon {
    width: 24px;
    height: 24px;
    background: url('') center no-repeat;
  }
  .next_icon {
    width: 24px;
    height: 24px;
    background: url('') center no-repeat;
  }
`;

const StyledBody = styled.div`
  text-align: center;
  margin: 20px;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
  }
  .row.week {
    height: 18px;
    border-bottom: 1px solid #e8e8e8;
  }
  .box {
    width: 40px;
    height: 40px;
    margin: 6px 6px;
    font-size: 14px;
  }
  .text {
    position: static;
    width: 40px;
    height: 40px;
    color: #292929;
  }
  .holiday,
  .grayed {
    color: #484848;
    pointer-events: none;
  }
  .day {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }
  .selected {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #1570ff;
    font-weight: 700;
    color: #fff;
  }
  .isSelected {
    position: relative;
    color: #1570ff;
    font-size: 10px;
    font-weight: 400;
  }
  .isToday {
    position: relative;
    color: #292929;
    font-size: 10px;
    font-weight: 400;
  }
  .none {
    display: none;
  }
`;
