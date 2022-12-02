import { Color } from 'react-input-color';

export interface IColorpicker {
  alpha?: number;
  color: string;
  onChange?(color: Color): void;
  teid?: string;
  placement?: string;
}
