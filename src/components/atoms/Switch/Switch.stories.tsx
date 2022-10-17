import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Switch from './Switch';
import { ISwitch } from './Switch.types';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    name: {
      name: 'name',
      description: 'Use the name prop to change the name of the Switch',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'value',
      description: 'Use the value prop to change the value of the Switch',
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
      description: 'Use the isChecked prop to change the isChecked of the Switch',
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
      description: 'Use the isDisabled prop to change the isDisabled of the Switch',
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
      defaultValue: 'switch',
      description: 'Use the teid prop to change the teid of the Switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'switch' },
      },
      control: {
        type: 'text',
      },
    },
    checkedLabel: {
      name: 'checkedLabel',
      description: 'Use the checkedLabel prop to change the checkedLabel of the Switch',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    unCheckedLabel: {
      name: 'unCheckedLabel',
      description: 'Use the unCheckedLabel prop to change the unCheckedLabel of the Switch',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Switch>;

export const Basic = (args: ISwitch) => <Switch {...args} />;
Basic.args = {
  unCheckedLabel: 'Off',
  checkedLabel: 'On',
};

export const Checked = (args: ISwitch) => <Switch {...args} />;
Checked.args = {
  unCheckedLabel: 'Off',
  checkedLabel: 'On',
  isChecked: true,
};
