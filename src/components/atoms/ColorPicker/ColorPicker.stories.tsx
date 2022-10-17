import { ComponentMeta } from '@storybook/react';
import React from 'react';
import ColorPicker from './ColorPicker';
import { IColorPicker } from './ColorPicker.types';

export default {
  title: 'Atoms/Color Picker',
  component: ColorPicker,
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
} as ComponentMeta<typeof ColorPicker>;

export const Basic = (args: IColorPicker) => <ColorPicker {...args} />;
