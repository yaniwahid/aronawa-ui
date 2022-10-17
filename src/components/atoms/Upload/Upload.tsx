import { default as UploadComponent } from 'rc-upload';
import React, { FC } from 'react';
import Button from '../Button';
import { UploadStyled } from './Upload.styles';
import { IUpload } from './Upload.types';

export const Upload: FC<IUpload> = ({ isButton, buttonLabel = 'Upload', children, ...props }) => {
  return (
    <UploadStyled>
      <UploadComponent prefixCls="aronawa-upload" {...props}>
        {children}
        {isButton && <Button>{buttonLabel}</Button>}
      </UploadComponent>
    </UploadStyled>
  );
};

export default Upload;
