import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Check, Label, OptionStyled, RadioStyled, WrapperCheck } from './Radio.styles';
import { IRadio } from './Radio.types';

const Radio: FC<IRadio> = ({
  name,
  data,
  value = '',
  onChange,
  isInvalid,
  isDisabled,
  variant = 'default',
  teid = 'radio',
  ...props
}) => {
  const [checked, setChecked] = useState(value);

  const handleChange = (newValue: string) => {
    setChecked(newValue);
  };

  useEffect(() => {
    onChange && onChange(checked);
  }, [checked, onChange]);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const options: ReactNode = data.map((item, index) => (
    <OptionStyled
      htmlFor={name}
      onClick={() => handleChange(item.value)}
      key={index}
      data-testid={`${teid}-${index}`}
      isDisabled={isDisabled || item.isDisabled}
      variant={variant}
      isChecked={item.value === checked}
      isInvalid={isInvalid}
    >
      <input
        name={name}
        type="radio"
        defaultChecked={item.value === checked}
        value={item.value}
        data-testid={`${teid}-change-${index}`}
        disabled={isDisabled || item.isDisabled}
        {...props}
      />
      <WrapperCheck>
        <Check isChecked={item.value === checked} isInvalid={isInvalid} isDisabled={isDisabled} />
      </WrapperCheck>
      {Boolean(item.label) && <Label variant={variant}>{item.label}</Label>}
    </OptionStyled>
  ));

  return (
    <RadioStyled variant={variant} {...props}>
      {options}
    </RadioStyled>
  );
};

export default Radio;
