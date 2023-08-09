import React from 'react';
import { Dayjs } from 'dayjs';
import styled from '@emotion/styled';

interface DateProps {
  current: Dayjs;
  isSelected: boolean;
  isNone: boolean;
  isSaturday: boolean;
  isHolyday: boolean;
  onClickDate: (day: Dayjs) => void;
  ref?: React.Ref<HTMLDivElement>;
}

const Box = styled.div({
  width: '32px',
  minWidth: '32px',
  height: '32px',
  minHeight: '32px',
  margin: '6px 6px',
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Div = styled.div({}, (props: { isNone: boolean }) => ({
  display: props.isNone ? 'none' : 'block',
}));

const Span = styled.span(
  {
    userSelect: 'none',
    cursor: 'pointer',
    position: 'relative',
  },
  (props: {
    isSelected: boolean;
    isSaturday?: boolean;
    isHolyday?: boolean;
  }) => ({
    color: props.isSelected
      ? '#fff'
      : props.isSaturday
      ? '#1570ff'
      : props.isHolyday
      ? '#ff1515'
      : '#000',
  }),
);

export const Date = React.forwardRef(
  (
    {
      current,
      isSelected,
      isSaturday,
      isHolyday,
      isNone,
      onClickDate,
    }: DateProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <Box ref={ref}>
        <Div
          isNone={isNone}
          onClick={() => {
            onClickDate(current);
          }}
        >
          <Span
            isSelected={isSelected}
            isSaturday={isSaturday}
            isHolyday={isHolyday}
          >
            {current.format('D')}
          </Span>
        </Div>
      </Box>
    );
  },
);
