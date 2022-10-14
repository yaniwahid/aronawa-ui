import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import Tooltip from './Tooltip';
import { ITooltip } from './Tooltip.types';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      name: 'placement',
      defaultValue: 'top',
      description: 'Use the placement prop to change the placement of the Tooltip',
      table: {
        type: {
          summary:
            'top | topLeft | topRight | right | rightTop | rightBottom | bottom | bottomLeft | bottomRight | left | leftTop | leftBottom',
        },
        defaultValue: { summary: 'top' },
      },
      control: {
        type: 'select',
        options: [
          'top',
          'topLeft',
          'topRight',
          'right',
          'rightTop',
          'rightBottom',
          'bottom',
          'bottomLeft',
          'bottomRight',
          'left',
          'leftTop',
          'leftBottom',
        ],
      },
    },
    color: {
      name: 'color',
      defaultValue: 'dark',
      description: 'Use the color prop to change the color of the Tooltip',
      table: {
        type: {
          summary: 'dark | light',
        },
        defaultValue: { summary: 'dark' },
      },
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

export const Basic = (args: ITooltip) => (
  <div className="center">
    <Tooltip {...args} overlay="i am a tooltip">
      <Button color="primary">Hover Me</Button>
    </Tooltip>
  </div>
);
