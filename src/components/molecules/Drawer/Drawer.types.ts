import { DrawerProps } from 'rc-drawer/lib/Drawer';
import { ReactNode } from 'react';
import { TColorButton, TVariantButton } from '../../atoms/Button/Button.types';
type TSizeDrawer = 'sm' | 'md' | 'lg';

export interface IDrawer extends DrawerProps {
  isOpen?: boolean;
  title?: ReactNode;
  onOk?: any;
  okText?: string;
  okColor?: TColorButton;
  okVariant?: TVariantButton;
  onClose?: any;
  cancelText?: string;
  cancelColor?: TColorButton;
  cancelVariant?: TVariantButton;
  isLoading?: boolean;
  isDisabled?: boolean;
  isNoFooter?: boolean;
  size?: TSizeDrawer;
  isCloseLeft?: boolean;
  isCloseable?: boolean;
  isMaskBlack?: boolean;
  closeIcon?: string;
  background?: string;
  children?: ReactNode;
}
