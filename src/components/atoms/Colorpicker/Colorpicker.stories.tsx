import { useArgs } from '@storybook/addons';
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
      defaultValue: '#FED330',
      description: 'Use the color prop to change the color of the v',
      table: {
        type: { summary: 'color' },
      },
      control: { type: 'color' },
    },
    alpha: {
      name: 'alpha',
      defaultValue: 100,
      description: 'Use the alpha prop to change the alpha of the v',
      table: {
        type: { summary: 'alpha' },
      },
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Colorpicker>;

export const Basic = (args: IColorpicker) => {
  const [{ color }, updateArgs] = useArgs();
  const onChange = () => updateArgs({ color: color });
  return <Colorpicker {...args} onChange={onChange} />;
};
