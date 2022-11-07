import { UploadProps } from 'rc-upload/lib/interface';
import { ReactNode } from 'react';

export interface IUpload extends UploadProps {
  isButton?: boolean;
  buttonLabel?: string;
  buttonTeid?: string;
  children?: ReactNode;
  teid?: string;
}
