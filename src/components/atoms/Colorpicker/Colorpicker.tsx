import React, { FC, useState } from 'react';
import { SketchPicker } from 'react-color';
import {
  ColorpickerBackground,
  ColorpickerCover,
  ColorpickerInput,
  ColorpickerPopover,
  ColorpickerStyled,
} from './Colorpicker.styles';
import { IColorpicker } from './Colorpicker.types';

const Colorpicker: FC<IColorpicker> = ({ color, onChange }) => {
  const [isOpen, setIsOpenn] = useState<boolean>(false);
  const onOpen = () => setIsOpenn(!isOpen);
  const onClose = () => setIsOpenn(false);
  return (
    <ColorpickerStyled>
      <ColorpickerInput onClick={onOpen}>
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
