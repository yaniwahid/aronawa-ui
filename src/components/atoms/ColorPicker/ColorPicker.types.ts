import { ColorChangeHandler } from 'react-color';

export interface IColorpicker {
  color?: string;
  onChange?: ColorChangeHandler;
}
