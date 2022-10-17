import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Icon from './Icon';
import { IIcon } from './Icon.types';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      defaultValue: 'dashboard',
      description: 'Use the name prop to change the name of the Icon',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      defaultValue: 24,
      description: 'Use the size prop to change the size of the Icon',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 14 },
      },
      control: {
        type: 'number',
      },
    },
    color: {
      name: 'color',
      defaultValue: '#000000',
      description: 'Use the color prop to change the color of the Icon',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#000000' },
      },
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Icon>;

export const Basic = (args: IIcon) => <Icon {...args} />;
