import styled from '@emotion/styled';

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
  height: '32px',
  minHeigh: '32px',
  margin: '6px 6px',
  fontSize: '14px',
});

const Span = styled.span({
  position: 'static',
  width: '32px',
  height: '32px',
  color: '#b8bbc1',
  fontSize: '14px',
  userSelect: 'none',
});

const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const Week = () => {
  return (
    <StyledWeek>
      {weeks.map(week => (
        <Box key={week}>
          <Span>{week}</Span>
        </Box>
      ))}
    </StyledWeek>
  );
};
