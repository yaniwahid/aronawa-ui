export interface ISwitch extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  name?: string;
  onChange?: (data: any | null) => void;
  teid?: string;
  checkedLabel?: string;
  unCheckedLabel?: string;
  id?: string;
}

export interface IStyle {
  isChecked?: boolean;
  isDisabled?: boolean;
}
