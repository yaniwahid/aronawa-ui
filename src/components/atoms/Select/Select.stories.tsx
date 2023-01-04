import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Select, { Option } from './Select';
import { ISelect } from './Select.types';

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the checked of the Select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      description: 'Use the isLoading prop to change the checked of the Select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Select>;

export const Basic = (args: ISelect) => (
  <Select placeholder="Select Name" {...args}>
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
);

export const Multiple = (args: ISelect) => (
  <Select placeholder="Select Name" mode="multiple" allowClear showArrow {...args}>
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
);

export const Tags = (args: ISelect) => (
  <Select placeholder="Select Name" mode="tags" allowClear showArrow {...args}>
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
);
