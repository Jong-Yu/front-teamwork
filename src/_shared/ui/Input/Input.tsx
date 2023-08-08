import React from 'react';
import styled from '@emotion/styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const StyledInput = styled.input(
  {
    width: '100%',
    height: '2.5rem',
    borderRadius: '5px',
    padding: '0 10px',
    border: '1.6px solid #000',
  },
  (props: InputProps) => ({
    borderColor: props.error ? '#ff0000' : '#000',

    '&:focus': {
      outlineColor: props.error ? '#ff0000' : '#1570FF',
    },
  }),
);

// forwardRef와 Generics를 사용하여 ref를 props로 받을 수 있도록 합니다.
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    // StyledInput 컴포넌트에 props와 ref를 전달합니다.
    return <StyledInput {...props} ref={ref} />;
  },
);
