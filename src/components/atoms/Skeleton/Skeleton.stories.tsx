import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Skeleton from './Skeleton';
import { ISkeleton } from './Skeleton.types';

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      name: 'width',
      defaultValue: '120px',
      description: 'Use the width prop to change the width of the Skeleton',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      name: 'height',
      defaultValue: '120px',
      description: 'Use the height prop to change the height of the Skeleton',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    color: {
      name: 'color',
      defaultValue: '#edeff2',
      description: 'Use the color prop to change the color of the Skeleton',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#edeff2' },
      },
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Skeleton>;

export const Basic = (args: ISkeleton) => <Skeleton {...args} />;
