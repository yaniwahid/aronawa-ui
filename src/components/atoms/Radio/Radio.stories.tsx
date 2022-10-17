import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Radio from './Radio';
import { IRadio, TVariantRadio } from './Radio.types';

const options = [
  {
    label: 'Radio 1',
    value: 'Radio 1',
  },
  {
    label: 'Radio 2',
    value: 'Radio 2',
  },
  {
    label: 'Radio 3',
    value: 'Radio 3',
  },
];

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    name: {
      name: 'name',
      description: 'Use the name prop to change the name of the Radio',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'value',
      description: 'Use the value prop to change the value of the Radio',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the isDisabled of the Radio',
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
      description: 'Use the isInvalid prop to change the isInvalid of the Radio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    data: {
      name: 'data',
      description: 'Use the data prop to change the data of the Radio',
      table: {
        type: { summary: 'array' },
      },
    },
    teid: {
      name: 'teid',
      defaultValue: 'radio',
      description: 'Use the teid prop to change the teid of the Radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'radio' },
      },
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'variant',
      defaultValue: 'default',
      description: 'Use the variant prop to change the variant of the Radio',
      table: {
        type: { summary: 'default | solid | button' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'radio',
        options: ['default', 'solid', 'button'],
      },
    },
  },
} as ComponentMeta<typeof Radio>;

const VariantType = ['default', 'solid', 'button'] as any;

export const Basic = (args: IRadio) => <Radio {...args} />;
Basic.args = {
  data: options,
};

export const Variant = (args: IRadio) => (
  <div className="vstack">
    {VariantType.map((e: TVariantRadio, index: number) => (
      <Radio {...args} variant={e} key={index} />
    ))}
  </div>
);

Variant.args = {
  data: options,
};
