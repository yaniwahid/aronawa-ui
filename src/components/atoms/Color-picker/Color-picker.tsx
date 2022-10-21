import React, { FC, useState } from 'react';
import { SketchPicker } from 'react-color';
import {
  ColorpickerBackground,
  ColorpickerCover,
  ColorpickerInput,
  ColorpickerPopover,
  ColorpickerStyled,
} from './Color-picker.styles';
import { IColorpicker } from './Color-picker.types';

const Colorpicker: FC<IColorpicker> = ({ color, onChange }) => {
  const [isOpen, setIsOpenn] = useState<boolean>(false);
  const onOpen = () => setIsOpenn(!isOpen);
  const onClose = () => setIsOpenn(false);
  return (
    <ColorpickerStyled onClick={onOpen}>
      <ColorpickerInput>
        <ColorpickerBackground color={color} />
      </ColorpickerInput>
      {isOpen ? (
        <ColorpickerPopover>
          <ColorpickerCover onClick={onClose} />
          <SketchPicker color={color} onChange={onChange} />
        </ColorpickerPopover>
      ) : null}
    </ColorpickerStyled>
  );
};

export default Colorpicker;
