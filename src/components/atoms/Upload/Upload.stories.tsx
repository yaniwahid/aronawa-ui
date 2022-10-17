import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Preview from '../Preview';
import Upload from './Upload';
import { IUpload } from './Upload.types';

export default {
  title: 'Atoms/Upload',
  component: Upload,
} as ComponentMeta<typeof Upload>;

export const Basic = (args: IUpload) => <Upload {...args} isButton />;

export const WithPreview = (args: IUpload) => (
  <Upload {...args} isButton>
    <Preview
      imageUrl="https://static.bmdstatic.com/st/home/eaac05-BTS-Serba-10.-Full-Banner.jpg"
      isClearable
    />
  </Upload>
);
