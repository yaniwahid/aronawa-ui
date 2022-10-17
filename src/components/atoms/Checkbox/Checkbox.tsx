import React, { FC } from 'react';
import Icon from '../Icon';
import { Check, CheckboxStyled, Label, WrapperCheck } from './Checkbox.styles';
import { ICheckbox } from './Checkbox.types';

const Checkbox: FC<ICheckbox> = ({
  value = '',
  isChecked = false,
  name,
  label,
  onChange,
  isDisabled,
  isInvalid,
  isIndeterminate,
  teid = 'checkbox',
  id = 'checkbox',
  ...props
}) => {
  const handleKeyPress = (e: any) => {
    if (e.keyCode !== 32) return;
    e.preventDefault();
    onChange?.(!isChecked);
  };

  const iconRender = () => {
    if (isIndeterminate) {
      return <Icon name="minus" />;
    }
    return <Icon name="check" />;
  };

  return (
    <CheckboxStyled isDisabled={isDisabled} {...props}>
      <WrapperCheck className="label-check">
        <input
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={isDisabled}
          value={value}
          data-testid="checkbox"
          data-te-id={teid}
          id={id}
          {...props}
        />
        <Check isChecked={isChecked} isInvalid={isInvalid} isDisabled={isDisabled}>
          {iconRender()}
        </Check>
      </WrapperCheck>
      {label && (
        <Label isDisabled={isDisabled} onKeyDown={(e) => handleKeyPress(e)} htmlFor={id}>
          {label}
        </Label>
      )}
    </CheckboxStyled>
  );
};

export default Checkbox;
