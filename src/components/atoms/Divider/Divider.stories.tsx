import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Divider from './Divider';
import { IDivider } from './Divider.types';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  argTypes: {
    color: {
      name: 'color',
      defaultValue: '#000000',
      description: 'Use the color prop to change the color of the Divider',
      table: {
        type: { summary: 'color' },
      },
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Divider>;

export const Basic = (args: IDivider) => <Divider {...args} my={32} />;
