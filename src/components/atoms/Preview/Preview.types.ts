import { SpaceProps } from 'styled-system';

export interface IPreview extends SpaceProps {
  iconUrl?: string;
  imageUrl?: string;
  isClearable?: boolean;
  onClear?: () => void;
  iconSize?: string;
  boxWidth?: string;
  boxHeight?: string;
}
