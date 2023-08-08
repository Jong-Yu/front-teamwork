import React from 'react';
import styled from '@emotion/styled';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const StyledTextArea = styled.textarea(
  {
    width: '100%',
    border: '1.6px solid #000',
    borderRadius: '5px',
    padding: '10px',
    resize: 'none',
  },
  (props: TextAreaProps) => ({
    borderColor: props.error ? '#ff0000' : '#000',
    '&:focus': {
      outlineColor: props.error ? '#ff0000' : '#1570FF',
    },
  }),
);

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return <StyledTextArea {...props} ref={ref} />;
  },
);
