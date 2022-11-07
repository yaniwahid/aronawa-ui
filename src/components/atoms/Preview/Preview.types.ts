import { ReactNode } from 'react';

export interface IPreview {
  imageUrl?: string;
  isClearable?: boolean;
  onClear?: (e: any) => void;
  imageSize?: string;
  boxWidth?: string;
  boxHeight?: string;
  children?: ReactNode;
  teid?: string;
  buttonTeid?: string;
}
