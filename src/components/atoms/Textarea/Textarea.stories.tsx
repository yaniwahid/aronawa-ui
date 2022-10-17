import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Textarea from './Textarea';
import { ITextarea } from './Textarea.types';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the checked of the Textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isInvalid: {
      name: 'isInvalid',
      defaultValue: false,
      description: 'Use the isInvalid prop to change the checked of the Textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Textarea>;

export const Basic = (args: ITextarea) => <Textarea placeholder="Type here" {...args} />;
