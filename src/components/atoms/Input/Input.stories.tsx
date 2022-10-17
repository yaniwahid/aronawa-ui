import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Input from './Input';
import { IInput } from './Input.types';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the checked of the Input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isInvalid: {
      name: 'isInvalid',
      defaultValue: false,
      description: 'Use the isInvalid prop to change the checked of the Input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'size',
      defaultValue: 'md',
      description: 'Use the size prop to change the size of the Input',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    leftAddon: {
      name: 'leftAddon',
      description: 'Use the leftAddon prop to change the leftAddon of the Input',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    rightAddon: {
      name: 'rightAddon',
      description: 'Use the rightAddon prop to change the rightAddon of the Input',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    leftElement: {
      name: 'leftElement',
      description: 'Use the leftElement prop to change the leftElement of the Input',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    rightElement: {
      name: 'rightElement',
      description: 'Use the rightElement prop to change the rightElement of the Input',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Input>;

export const Basic = (args: IInput) => <Input placeholder="Type here" {...args} />;

export const WithAddOn = (args: IInput) => (
  <div className="vstack">
    <Input {...args} leftAddon="+62" placeholder="Left Addon" />
    <Input {...args} rightAddon=".com" placeholder="Right Addon" />
    <Input {...args} leftAddon="https" rightAddon=".com" placeholder="Left & Right Addon" />
  </div>
);

export const WithElement = (args: IInput) => (
  <div className="vstack">
    <Input {...args} leftElement={<Icon name="user" />} placeholder="Left Element" />
    <Input
      {...args}
      rightElement={<Button color="secondary">Submit</Button>}
      placeholder="Right Element"
    />
    <Input
      {...args}
      leftElement={<Icon name="user" />}
      rightElement={<Button icon="search" color="primary" />}
      placeholder="Left & Right Element"
    />
  </div>
);

export const Sizes = (args: IInput) => (
  <div className="vstack">
    <Input {...args} size="sm" placeholder="Input Small" />
    <Input {...args} size="md" placeholder="Input Medium" />
    <Input {...args} size="lg" placeholder="Input Large" />
  </div>
);
