import { SpaceProps } from 'styled-system';

export type TColorBadge = 'neutral' | 'primary' | 'secondary' | 'approval' | 'danger';
export type TVariantBadge = 'solid' | 'subtle' | 'indicator' | 'ghost';

export interface IBadge extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
  color?: TColorBadge;
  variant?: TVariantBadge;
  isClosable?: boolean;
  onClose?: () => void;
}
