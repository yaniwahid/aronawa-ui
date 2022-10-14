import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Upload from './Upload';
import { IUpload } from './Upload.types';

export default {
  title: 'Atoms/Upload',
  component: Upload,
  argTypes: {
    isButton: {
      name: 'isButton',
      defaultValue: false,
      description: 'Use the isButton prop to change the isButton of the Upload',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Upload>;

export const Basic = (args: IUpload) => <Upload {...args} />;
