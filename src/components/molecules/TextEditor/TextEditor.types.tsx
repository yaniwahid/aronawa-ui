export interface ITextEditor {
  name?: string;
  initData?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  isReadOnly?: boolean;
  onChangeSource?: (source: string) => void;
  additionalConfig?: object;
  id?: string;
  teid?: string;
}
