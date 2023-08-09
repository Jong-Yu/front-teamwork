import styled from '@emotion/styled';

interface WeekProps {
  open: boolean;
  selectWeek?: number;
}

const StyledWeek = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0 20px',
  textAlign: 'center',
});

const Box = styled.div({
  width: '32px',
  minWidth: '32px',
  height: '16px',
  minHeight: '16px',
  margin: '6px',
});

const Span = styled.span(
  {
    width: '32px',
    height: '32px',
    fontSize: '12px',
    fontWeight: 700,
    userSelect: 'none',
    position: 'relative',
  },
  (props: { open: boolean; selected: boolean }) => ({
    color: !props.open && props.selected ? '#fff' : '#b8bbc1',
  }),
);

const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const Week = ({ open, selectWeek }: WeekProps) => {
  return (
    <StyledWeek>
      {weeks.map((week, index) => (
        <Box key={week}>
          <Span open={open} selected={index === selectWeek}>
            {week}
          </Span>
        </Box>
      ))}
    </StyledWeek>
  );
};
