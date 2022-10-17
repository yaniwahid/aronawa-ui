import React, { FC } from 'react';
import { Wrapper } from './Textarea.styles';
import { ITextarea } from './Textarea.types';

const Textarea: FC<ITextarea> = ({
  onChange,
  onBlur,
  isInvalid,
  isDisabled,
  teid = 'textarea',
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e.currentTarget.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur && onBlur(e.currentTarget.value);
  };

  return (
    <Wrapper isInvalid={isInvalid} isDisabled={isDisabled}>
      <textarea
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isDisabled}
        data-testid={teid}
        {...props}
      />
    </Wrapper>
  );
};

export default Textarea;
