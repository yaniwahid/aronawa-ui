import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Badge from './Badge';
import { IBadge, TColorBadge, TVariantBadge } from './Badge.types';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    color: {
      name: 'color',
      defaultValue: 'neutral',
      description: 'Use the color prop to change the color of the Badge',
      table: {
        type: { summary: 'neutral | primary | secondary | approval | danger' },
        defaultValue: { summary: 'neutral' },
      },
      control: {
        type: 'select',
        options: ['neutral', 'primary', 'secondary', 'approval', 'danger'],
      },
    },
    variant: {
      name: 'variant',
      defaultValue: 'solid',
      description: 'Use the variant prop to change the variant of the Badge',
      table: {
        type: { summary: 'solid | subtle | indicator | ghost' },
        defaultValue: { summary: 'solid' },
      },
      control: {
        type: 'select',
        options: ['solid', 'subtle', 'indicator', 'ghost'],
      },
    },
    isClosable: {
      name: 'isClosable',
      defaultValue: false,
      description: 'Use the isClosable prop to change the isClosable of the Badge',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const parameters = ['color', 'variant', 'isClosable'];
const ColorType = ['neutral', 'primary', 'secondary', 'approval', 'danger'] as any;
const VariantType = ['solid', 'subtle', 'indicator', 'ghost'] as any;

const capFirstLetterInSentence = (sentence: string) => {
  let words = sentence.split(' ').map((word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return words.join(' ');
};

export const Basic = (args: IBadge) => <Badge {...args}>Badge</Badge>;
Basic.parameters = { controls: { include: parameters } };

export const Color = (args: IBadge) => (
  <div className="hstack">
    {ColorType.map((e: TColorBadge, index: number) => (
      <Badge {...args} color={e} key={index}>
        {capFirstLetterInSentence(e)}
      </Badge>
    ))}
  </div>
);
Color.parameters = { controls: { include: parameters } };

export const Variant = (args: IBadge) => (
  <div className="hstack">
    {VariantType.map((e: TVariantBadge, index: number) => (
      <Badge {...args} variant={e} key={index}>
        {capFirstLetterInSentence(e)}
      </Badge>
    ))}
  </div>
);
Variant.parameters = { controls: { include: parameters } };
