export interface ITextarea
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onBlur'> {
  isInvalid?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  isDisabled?: boolean;
  teid?: string;
}

export interface IStyle {
  isInvalid?: boolean;
  isDisabled?: boolean;
}
