import styled from '@emotion/styled';

interface TabItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

const Item = styled.span<TabItemProps>(props => ({
  color: props.active ? '#282B33' : '#727F88',
  fontWeight: props.active ? 'bold' : 'normal',
  position: 'relative',
  padding: 0,
  margin: '0',
  marginRight: '10px',
  userSelect: 'none',
  cursor: 'pointer',
  borderBottom: props.active ? '2px solid #1570FF' : '2px solid #fff',

  '&:hover': {
    color: ' #282B33',
  },
}));

export const TabItem = (props: TabItemProps) => {
  return (
    <Item className={`tab-item${props.active ? ' active' : ''}`} {...props} />
  );
};
