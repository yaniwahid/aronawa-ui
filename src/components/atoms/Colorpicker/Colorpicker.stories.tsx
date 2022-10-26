import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Colorpicker from './Colorpicker';
import { IColorpicker } from './Colorpicker.types';

export default {
  title: 'Atoms/Colorpicker',
  component: Colorpicker,
  argTypes: {
    color: {
      name: 'color',
      defaultValue: '#000000',
      description: 'Use the color prop to change the color of the v',
      table: {
        type: { summary: 'color' },
      },
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Colorpicker>;

export const Basic = (args: IColorpicker) => <Colorpicker {...args} />;
