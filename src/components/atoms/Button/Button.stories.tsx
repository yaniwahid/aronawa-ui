import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { IButton, TColorButton, TVariantButton } from './Button.types';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      name: 'color',
      defaultValue: 'neutral',
      description: 'Use the color prop to change the color of the Button',
      table: {
        type: { summary: 'neutral | primary | secondary | approval | danger | light' },
        defaultValue: { summary: 'neutral' },
      },
      control: {
        type: 'select',
        options: ['neutral', 'primary', 'secondary', 'approval', 'danger', 'light'],
      },
    },
    variant: {
      name: 'variant',
      defaultValue: 'solid',
      description: 'Use the variant prop to change the variant of the Button',
      table: {
        type: { summary: 'solid | outline | ghost | link' },
        defaultValue: { summary: 'solid' },
      },
      control: {
        type: 'radio',
        options: ['solid', 'outline', 'ghost', 'link'],
      },
    },
    size: {
      name: 'size',
      defaultValue: 'md',
      description: 'Use the size prop to change the size of the Button',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the isDisabled of the Button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isFullWidth: {
      name: 'isFullWidth',
      defaultValue: false,
      description: 'Use the isFullWidth prop to change the isFullWidth of the Button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      description: 'Use the isLoading prop to change the isLoading of the Button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      name: 'icon',
      description: 'Use the icon prop to change the icon of the Button',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    rightIcon: {
      name: 'rightIcon',
      description: 'Use the rightIcon prop to change the rightIcon of the Button',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    href: {
      name: 'href',
      description: 'Use the href prop to change the href of the Button',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    teid: {
      name: 'teid',
      defaultValue: 'button',
      description: 'Use the teid prop to change the teid of the Button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const ColorType = ['neutral', 'primary', 'secondary', 'approval', 'danger', 'light'] as any;
const VariantType = ['solid', 'outline', 'ghost', 'link'] as any;

const capFirstLetterInSentence = (sentence: string) => {
  let words = sentence.split(' ').map((word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return words.join(' ');
};

export const Basic = (args: IButton) => <Button {...args}>Button</Button>;

export const Color = (args: IButton) => (
  <div className="hstack">
    {ColorType.map((e: TColorButton, index: number) => (
      <Button {...args} color={e} key={index}>
        {capFirstLetterInSentence(e)}
      </Button>
    ))}
  </div>
);

export const Variant = (args: IButton) => (
  <div className="hstack">
    {VariantType.map((e: TVariantButton, index: number) => (
      <Button {...args} variant={e} key={index}>
        {capFirstLetterInSentence(e)}
      </Button>
    ))}
  </div>
);

export const Sizes = (args: IButton) => (
  <div className="hstack">
    <Button {...args} size="sm">
      Button Small
    </Button>
    <Button {...args} size="md">
      Button Medium
    </Button>
    <Button {...args} size="lg">
      Button Large
    </Button>
    <Button {...args} size="xl">
      Button Extra Large
    </Button>
  </div>
);

export const AsLink = (args: IButton) => <Button {...args}>As Link</Button>;
AsLink.args = {
  href: '/',
};

export const WithIcon = (args: IButton) => (
  <div className="hstack">
    <Button {...args} icon="plus-circle">
      Left Icon
    </Button>
    <Button {...args} rightIcon="share">
      Right Icon
    </Button>
    <Button {...args} icon="apps" />
  </div>
);
