import { ReactNode } from 'react';

type TSizeInput = 'sm' | 'md' | 'lg';

export interface IInput
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'onBlur' | 'size'
  > {
  isInvalid?: boolean;
  size?: TSizeInput;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  isDisabled?: boolean;
  teid?: string;
}
