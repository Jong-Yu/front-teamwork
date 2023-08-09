import styled from '@emotion/styled';
import { Dayjs } from 'dayjs';
import { Row } from './Row';
import { Date } from './Date';

interface DatesProps {
  open: boolean;
  dates: Dayjs[][];
  value: Dayjs;
  viewDate: Dayjs;
  selectedDateRef: React.Ref<HTMLDivElement>;
  onChangeSelectDate: (day: Dayjs) => void;
}

const Container = styled.div(
  {},
  (props: { open: boolean; weeksLength: number }) => ({
    maxHeight: props.open ? `${44 * props.weeksLength}px` : '44px',
    transition: 'max-height 0.3s',
    overflow: 'hidden',
  }),
);

export const Dates = ({
  open,
  dates,
  value,
  viewDate,
  selectedDateRef,
  onChangeSelectDate,
}: DatesProps) => {
  return (
    <Container open={open} weeksLength={dates.length}>
      {dates.map(week => (
        <Row key={week[0].format('YYYY-MM-DD')}>
          {week.map(day => {
            const isSelected = value.isSame(day, 'day');
            const isNone = day.format('MM') !== viewDate.format('MM');
            const isSaturday = day.day() === 6;
            const isHolyday = day.day() === 0;

            return (
              <Date
                ref={isSelected && !isNone ? selectedDateRef : null}
                key={day.format('YYYYMMDD')}
                current={day}
                isSelected={isSelected}
                isSaturday={isSaturday}
                isHolyday={isHolyday}
                isNone={isNone}
                onClickDate={onChangeSelectDate}
              />
            );
          })}
        </Row>
      ))}
    </Container>
  );
};
