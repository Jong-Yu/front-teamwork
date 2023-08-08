import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div({
  background: '#1570FF',
  width: '38px',
  minWidth: '38px',
  height: '38px',
  minHeight: '38px',
  fontSize: '14px',
  position: 'absolute',
  borderRadius: '50%',
});

export const Background = React.forwardRef(
  (_, ref: React.Ref<HTMLDivElement>) => {
    return <StyledDiv ref={ref} />;
  },
);
