import React from 'react';
import { Label, SwitchStyled, WrapperSwitch } from './Switch.styles';
import { ISwitch } from './Switch.types';

const Switch: React.FC<ISwitch> = ({
  value = '',
  isChecked = false,
  name,
  onChange,
  isDisabled,
  teid = 'switch',
  checkedLabel,
  unCheckedLabel,
  id = 'switch',
  ...props
}) => {
  const handleKeyPress = (e: any) => {
    if (e.keyCode !== 32) return;
    e.preventDefault();
    onChange?.(!isChecked);
  };
  const checkedLabelRender = isChecked ? checkedLabel : unCheckedLabel;
  return (
    <SwitchStyled isDisabled={isDisabled}>
      <WrapperSwitch isChecked={isChecked} isDisabled={isDisabled}>
        <input
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={isDisabled}
          value={value}
          data-testid={teid}
          id={id}
          {...props}
        />
      </WrapperSwitch>
      {(checkedLabel || unCheckedLabel) && (
        <Label isDisabled={isDisabled} onKeyDown={(e) => handleKeyPress(e)} htmlFor={id}>
          {checkedLabelRender}
        </Label>
      )}
    </SwitchStyled>
  );
};

Switch.displayName = 'Switch';

export default Switch;
