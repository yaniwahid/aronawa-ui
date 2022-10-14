import { default as UploadComponent } from 'rc-upload';
import React, { FC } from 'react';
import { IUpload } from './Upload.types';

export const Upload: FC<IUpload> = ({ children, ...props }) => {
  return <UploadComponent {...props}>{children}</UploadComponent>;
};

export default Upload;
