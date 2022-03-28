import { HStack } from '@chakra-ui/react';
import React from 'react';
import { buttonColor } from '../../utils/Types';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isDisabled: {
      description: 'if button is disabled',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    isFullWidth: {
      description: 'Used to give the icon full width',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
};

export const ButtonColors = (args) => (
  <HStack spacing="2">
    {buttonColor.map((e) => (
      <Button color={e} {...args}>
        {e}
      </Button>
    ))}
  </HStack>
);

ButtonColors.args = {
  children: 'Button',
};
