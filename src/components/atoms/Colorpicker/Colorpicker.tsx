import React, { FC } from 'react';
import InputColor from 'react-input-color';
import { ColorpickerStyled } from './Colorpicker.styles';
import { IColorpicker } from './Colorpicker.types';

const decimalToHex = (alpha: number) => {
  let aHex = Math.round(255 * alpha).toString(16);
  return alpha === 0 ? '00' : aHex.length < 2 ? `0${aHex}` : aHex;
};

const Colorpicker: FC<IColorpicker> = ({ color, alpha = 100, onChange, teid = 'colorpicker' }) => {
  return (
    <ColorpickerStyled data-testid={teid}>
      <InputColor initialValue={`${color}${decimalToHex(alpha / 100)}`} onChange={onChange} />
    </ColorpickerStyled>
  );
};

export default Colorpicker;
