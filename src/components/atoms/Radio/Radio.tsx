import React, { useEffect, useState } from 'react';
import { Check, Label, OptionStyled, RadioGroup, WrapperCheck } from './Radio.styles';
import { IRadio } from './Radio.types';

const Radio: React.FC<IRadio> = ({
  name,
  data,
  value = '',
  onChange,
  isInvalid,
  isDisabled,
  isSolid,
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

  const options: React.ReactNode = data.map((item, index) => (
    <OptionStyled
      htmlFor={name}
      onClick={() => handleChange(item.value)}
      key={index}
      data-testid={`${teid}-${index}`}
      isDisabled={isDisabled || item.isDisabled}
      isSolid={isSolid}
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
      {Boolean(item.label) && <Label isSolid={isSolid}>{item.label}</Label>}
    </OptionStyled>
  ));

  return (
    <RadioGroup isSolid={isSolid} {...props}>
      {options}
    </RadioGroup>
  );
};

export default Radio;
