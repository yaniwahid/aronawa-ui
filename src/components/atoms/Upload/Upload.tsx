import { default as UploadComponent } from 'rc-upload';
import React, { FC } from 'react';
import Button from '../Button';
import { IUpload } from './Upload.types';

export const Upload: FC<IUpload> = ({ isButton, buttonLabel = 'Upload', children, ...props }) => {
  return (
    <UploadComponent {...props}>
      {isButton && <Button>{buttonLabel}</Button>}
      {children}
    </UploadComponent>
  );
};

export default Upload;
