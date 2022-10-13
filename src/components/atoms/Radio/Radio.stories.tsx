import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Radio from './Radio';
import { IRadio } from './Radio.types';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the isDisabled of the Radio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isSolid: {
      name: 'isSolid',
      defaultValue: false,
      description: 'Use the isSolid prop to change the isSolid of the Radio',
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
      description: 'Use the isInvalid prop to change the isInvalid of the Radio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    teid: {
      name: 'teid',
      defaultValue: 'radio',
      description: 'Use the teid prop to change the teid of the Radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'radio' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Radio>;

const options = [
  {
    label: 'Radio 1',
    value: 'Radio 1',
  },
  {
    label: 'Radio 2',
    value: 'Radio 2',
  },
];

export const Basic = (args: IRadio) => <Radio {...args} data={options} />;

export const Solid = (args: IRadio) => <Radio mt="4" {...args} data={options} />;
Solid.args = {
  isSolid: true,
};
