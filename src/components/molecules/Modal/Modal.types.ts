import { DialogProps } from 'rc-dialog/lib';
import { ReactNode } from 'react';
import { TColorButton, TVariantButton } from '../../atoms/Button/Button.types';
type TSizeModal = 'sm' | 'md' | 'lg';
type TVariantModal = 'default' | 'filled' | 'clean';

export interface IModal extends DialogProps {
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
  size?: TSizeModal;
  variant?: TVariantModal;
  isCloseable?: boolean;
}
