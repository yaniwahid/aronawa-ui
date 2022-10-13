import React from 'react';
import { InputAddon, InputElement, InputGroup, InputStyled } from './Input.styles';
import { IInput } from './Input.types';

const Input: React.FC<IInput> = ({
  size,
  onChange,
  onBlur,
  isInvalid,
  isDisabled,
  leftAddon,
  rightAddon,
  teid,
  leftElement,
  rightElement,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.value);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e.currentTarget.value);
  };
  const inputNode = () => {
    if (leftAddon || rightAddon || leftElement || rightElement) {
      return (
        <InputGroup isInvalid={isInvalid} isDisabled={isDisabled}>
          {leftAddon && <InputAddon size={size}>{leftAddon}</InputAddon>}
          {leftElement && <InputElement size={size}>{leftElement}</InputElement>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isDisabled}
            data-testid={teid}
            {...props}
          />
          {rightAddon && (
            <InputAddon size={size} rightAddon>
              {rightAddon}
            </InputAddon>
          )}
          {rightElement && (
            <InputElement size={size} rightElement>
              {rightElement}
            </InputElement>
          )}
        </InputGroup>
      );
    } else {
      return (
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isDisabled}
          data-testid={teid}
          {...props}
        />
      );
    }
  };

  return (
    <InputStyled
      size={size}
      isInvalid={isInvalid}
      leftAddon={leftAddon}
      rightAddon={rightAddon}
      leftElement={leftElement}
      rightElement={rightElement}
      isDisabled={isDisabled}
    >
      {inputNode()}
    </InputStyled>
  );
};

export default Input;
