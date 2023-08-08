import styled from '@emotion/styled';

interface TabItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

const Item = styled.span(
  {
    position: 'relative',
    padding: 0,
    margin: '0',
    marginRight: '10px',
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: '1.3rem',

    '&:hover': {
      color: ' #282B33',
    },

    [`@media (max-width: ${import.meta.env.VITE_MOBILE_WIDTH})`]: {
      fontSize: '1.2rem',
    },
  },
  (props: TabItemProps) => () => ({
    color: props.active ? '#282B33' : '#727F88',
    fontWeight: props.active ? 'bold' : 'normal',

    borderBottom: props.active ? '3px solid #1570FF' : '3px solid #fff',
  }),
);

export const TabItem = (props: TabItemProps) => {
  return (
    <Item className={`tab-item${props.active ? ' active' : ''}`} {...props} />
  );
};
