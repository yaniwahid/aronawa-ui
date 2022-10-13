import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Radio from './Radio';
import { IRadio } from './Radio.types';

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

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    name: {
      name: 'name',
      description: 'Use the name prop to change the name of the Radio',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'value',
      description: 'Use the value prop to change the value of the Radio',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
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
    data: {
      name: 'data',
      description: 'Use the data prop to change the data of the Radio',
      table: {
        type: { summary: 'array' },
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

export const Basic = (args: IRadio) => <Radio {...args} />;
Basic.args = {
  data: options,
};

export const Solid = (args: IRadio) => <Radio {...args} />;
Solid.args = {
  isSolid: true,
  data: options,
};
