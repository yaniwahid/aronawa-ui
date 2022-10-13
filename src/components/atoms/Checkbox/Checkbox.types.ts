export interface ICheckbox extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  label?: string | React.ReactNode;
  isChecked?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  name?: string;
  onChange?: (data: any | null, name?: string) => void;
  isIndeterminate?: boolean;
  teid?: string;
  id?: string;
}

export interface IStyle {
  isChecked?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
}
