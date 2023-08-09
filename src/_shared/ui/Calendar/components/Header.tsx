import styled from '@emotion/styled';
import { Dayjs } from 'dayjs';
import { useHeader } from '../hooks/useHeader';
import { Next } from './Next';
import { Prev } from './Prev';

const StyledHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px',
});

interface HeaderProps {
  viewDate: Dayjs;
  onChangeViewDate: (date: Dayjs) => void;
}

export const Header = ({ viewDate, onChangeViewDate }: HeaderProps) => {
  const { onClickNext, onClickPrev } = useHeader();

  return (
    <StyledHeader>
      <Prev onClick={() => onClickPrev(viewDate, onChangeViewDate)} />
      <span className="thisMonth">{viewDate.format('MM')}월</span>
      <Next onClick={() => onClickNext(viewDate, onChangeViewDate)} />
    </StyledHeader>
  );
};
