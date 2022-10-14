import { SpaceProps } from 'styled-system';

export interface IForm extends SpaceProps, React.HTMLAttributes<HTMLFormElement> {
  layout?: 'inline' | 'horizontal' | 'vertical';
  formWidth?: string;
  teid?: string;
}

export interface IFormItem {
  label?: React.ReactNode;
  help?: React.ReactNode;
  extra?: React.ReactNode;
  isRequired?: boolean;
  isInvalid?: boolean;
  invalidText?: React.ReactNode;
  formWidth?: string;
}
