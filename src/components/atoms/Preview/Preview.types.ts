import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export interface IPreview extends SpaceProps {
  imageUrl?: string;
  isClearable?: boolean;
  onClear?: (e: any) => void;
  imageSize?: string;
  boxWidth?: string;
  boxHeight?: string;
  children?: ReactNode;
}
