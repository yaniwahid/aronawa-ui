import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export interface IForm extends SpaceProps, React.HTMLAttributes<HTMLFormElement> {
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
}
