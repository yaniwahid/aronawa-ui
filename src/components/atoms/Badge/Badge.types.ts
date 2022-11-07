import { ReactNode } from 'react';

export type TColorBadge = 'neutral' | 'primary' | 'secondary' | 'approval' | 'danger';
export type TVariantBadge = 'solid' | 'subtle' | 'indicator' | 'ghost';

export interface IBadge extends React.HTMLAttributes<HTMLDivElement> {
  color?: TColorBadge;
  variant?: TVariantBadge;
  isClosable?: boolean;
  onClose?: (e: any) => void;
  children?: ReactNode;
  teid?: string;
}
