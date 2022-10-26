import { Global } from '@emotion/react';
import ColorPicker from 'rc-color-picker';
import React, { FC } from 'react';
import { ColorpickerStyled } from './Colorpicker.styles';
import { IColorpicker } from './Colorpicker.types';

const Colorpicker: FC<IColorpicker> = ({ ...props }) => {
  return (
    <>
      <Global styles={ColorpickerStyled} />
      <ColorPicker prefixCls="aronawa-color-picker" {...props}>
        <span className="aronawa-color-picker-trigger"></span>
      </ColorPicker>
    </>
  );
};

export default Colorpicker;
