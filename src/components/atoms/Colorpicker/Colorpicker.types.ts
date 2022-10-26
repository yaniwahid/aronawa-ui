import { ReactNode } from 'react';

export interface IColorpicker {
  defaultColor?: string;
  defaultAlpha?: number;
  alpha?: number;
  children?: ReactNode;
  className?: string;
  color?: string;
  enableAlpha?: boolean;
  onChange?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
}
