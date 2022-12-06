import { ComponentMeta } from '@storybook/react';
import React from 'react';
import TreeSelect from './TreeSelect';
import { ITreeSelect } from './TreeSelect.types';

export default {
  title: 'Atoms/Tree Select',
  component: TreeSelect,
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the checked of the TreeSelect',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof TreeSelect>;

const data = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

export const Basic = (args: ITreeSelect) => (
  <TreeSelect placeholder="Select Tree Select" treeData={data} {...args} />
);

export const TreeCheckable = (args: ITreeSelect) => (
  <TreeSelect
    placeholder="Select Tree Select"
    treeCheckable
    multiple
    allowClear
    treeData={data}
    {...args}
  />
);
