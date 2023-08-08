import styled from '@emotion/styled';
import { Dayjs } from 'dayjs';
import { useHeader } from '../hooks/useHeader';

const StyledHeader = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '20px',
});

// .thisMonth {
//     font-weight: 700;
//     color: #292929;
//     line-height: 24px;
//     user-select: none;
//   }
//   button {
//     width: 24px;
//     margin: 0 8px;
//   }
//   .previous_icon {
//     width: 24px;
//     height: 24px;
//     background: url('') center no-repeat;
//   }
//   .next_icon {
//     width: 24px;
//     height: 24px;
//     background: url('') center no-repeat;
//   }

interface HeaderProps {
  viewDate: Dayjs;
  onChangeViewDate: (date: Dayjs) => void;
}

export const Header = ({ viewDate, onChangeViewDate }: HeaderProps) => {
  const { onClickNext, onClickPrev } = useHeader();

  return (
    <StyledHeader>
      <button
        className="previous_icon"
        onClick={() => onClickPrev(viewDate, onChangeViewDate)}
      />
      <span className="thisMonth">{viewDate.format('MM')}월</span>
      <button
        className="next_icon"
        onClick={() => onClickNext(viewDate, onChangeViewDate)}
      />
    </StyledHeader>
  );
};
