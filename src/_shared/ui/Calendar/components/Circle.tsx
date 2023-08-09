import React from 'react';
import styled from '@emotion/styled';

interface CircleProps {
  open: boolean;
}

const StyledDiv = styled.div(
  {
    background: '#1570FF',
    width: '38px',
    minWidth: '38px',
    height: '38px',
    minHeight: '38px',
    fontSize: '14px',
    position: 'absolute',
  },
  (props: CircleProps) => ({
    width: props.open ? '38px' : '40px',
    height: props.open ? '38px' : '63px',
    minHeight: props.open ? '38px' : '63px',
    borderRadius: props.open ? '50%' : '20%',
  }),
);

export const Circle = React.forwardRef(
  (props: CircleProps, ref: React.Ref<HTMLDivElement>) => {
    return <StyledDiv ref={ref} {...props} />;
  },
);
