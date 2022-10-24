import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export type TColorButton = 'neutral' | 'primary' | 'secondary' | 'approval' | 'danger' | 'light';
export type TVariantButton = 'solid' | 'outline' | 'ghost' | 'link' | 'text';
export type TSizeButton = 'sm' | 'md' | 'lg' | 'xl';

export interface IButton extends SpaceProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: TColorButton;
  variant?: TVariantButton;
  size?: TSizeButton;
  target?: '_self' | '_blank' | '_parent' | '_top';
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  icon?: string;
  rightIcon?: string;
  href?: string;
  as?: React.ElementType<any>;
  teid?: string;
  children?: ReactNode;
}
