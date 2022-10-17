import React, { FC, useState } from 'react';
import { SketchPicker } from 'react-color';
import {
  ColorPickerBackground,
  ColorPickerCover,
  ColorPickerInput,
  ColorPickerPopover,
  ColorPickerStyled,
} from './ColorPicker.styles';
import { IColorPicker } from './ColorPicker.types';

const ColorPicker: FC<IColorPicker> = ({ color, onChange }) => {
  const [isOpen, setIsOpenn] = useState<boolean>(false);
  const onOpen = () => setIsOpenn(!isOpen);
  const onClose = () => setIsOpenn(false);
  return (
    <ColorPickerStyled onClick={onOpen}>
      <ColorPickerInput>
        <ColorPickerBackground color={color} />
      </ColorPickerInput>
      {isOpen ? (
        <ColorPickerPopover>
          <ColorPickerCover onClick={onClose} />
          <SketchPicker color={color} onChange={onChange} />
        </ColorPickerPopover>
      ) : null}
    </ColorPickerStyled>
  );
};

export default ColorPicker;
