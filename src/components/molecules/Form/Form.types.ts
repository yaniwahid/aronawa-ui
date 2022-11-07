import { ReactNode } from 'react';

export interface IForm extends React.HTMLAttributes<HTMLFormElement> {
  layout?: 'inline' | 'horizontal' | 'vertical';
  formWidth?: string;
  teid?: string;
  children?: ReactNode;
}

export interface IFormItem {
  label?: ReactNode;
  help?: ReactNode;
  extra?: ReactNode;
  isRequired?: boolean;
  isInvalid?: boolean;
  invalidText?: ReactNode;
  formWidth?: string;
  isColumn?: boolean;
  children?: ReactNode;
  teid?: string;
}

export interface IFormAction {
  children?: ReactNode;
  teid?: string;
}
