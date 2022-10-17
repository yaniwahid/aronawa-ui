import { ColorChangeHandler } from 'react-color';

export interface IColorPicker {
  color?: string;
  onChange?: ColorChangeHandler;
}
