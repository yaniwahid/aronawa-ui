import { CKEditorProps } from 'ckeditor4-react';

export interface ITextEditor extends CKEditorProps<any> {
  name?: string;
  data?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  isReadOnly?: boolean;
  onChangeSource?: (source: string) => void;
  additionalConfig?: object;
  id?: string;
}
