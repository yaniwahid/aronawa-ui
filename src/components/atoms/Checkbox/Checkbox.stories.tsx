import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';
import { ICheckbox } from './Checkbox.types';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    name: {
      name: 'name',
      description: 'Use the name prop to change the name of the Checkbox',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'value',
      description: 'Use the value prop to change the value of the Checkbox',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    isChecked: {
      name: 'isChecked',
      defaultValue: false,
      description: 'Use the isChecked prop to change the isChecked of the Checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the isDisabled of the Checkbox',
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
      description: 'Use the isInvalid prop to change the isInvalid of the Checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isIndeterminate: {
      name: 'isIndeterminate',
      defaultValue: false,
      description: 'Use the isIndeterminate prop to change the isIndeterminate of the Checkbox',
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
      defaultValue: 'checkbox',
      description: 'Use the teid prop to change the teid of the Checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'checkbox' },
      },
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'label',
      description: 'Use the label prop to change the label of the Checkbox',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Basic = (args: ICheckbox) => <Checkbox {...args} />;
Basic.args = {
  label: 'Checkbox',
};

export const Checked = (args: ICheckbox) => <Checkbox {...args} />;
Checked.args = {
  label: 'Checkbox',
  isChecked: true,
};

export const Indeterminate = (args: ICheckbox) => <Checkbox {...args} />;
Indeterminate.args = {
  label: 'Checkbox',
  isIndeterminate: true,
  isChecked: true,
};
