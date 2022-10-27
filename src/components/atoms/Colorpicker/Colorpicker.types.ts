import { Color } from 'react-color';

export interface IColorpicker {
  alpha?: number;
  color: string;
  onChange?(color: Color): void;
}

