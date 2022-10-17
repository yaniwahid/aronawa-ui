import { InputHTMLAttributes, ReactNode } from 'react';

export type TVariantRadio = 'default' | 'solid' | 'button';
export interface IRadioData {
  label?: ReactNode;
  value: string;
  isDisabled?: boolean;
}

export interface IRadio extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  name?: string;
  value?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  variant?: TVariantRadio;
  data: IRadioData[];
  onChange?: (data: string | null) => void;
  teid?: string;
}

export interface IStyle {
  isChecked?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  variant?: TVariantRadio;
}
