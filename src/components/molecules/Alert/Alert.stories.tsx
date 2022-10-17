import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Alert from './Alert';
import { IAlert, TColorAlert } from './Alert.types';

export default {
  title: 'Molecules/Alert',
  component: Alert,
  argTypes: {
    color: {
      name: 'color',
      defaultValue: 'primary',
      description: 'Use the color prop to change the color of the Alert',
      table: {
        type: { summary: 'primary | secondary | approval | danger' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'approval', 'danger'],
      },
    },
    isClosable: {
      name: 'isClosable',
      defaultValue: false,
      description: 'Use the isClosable prop to change the isClosable of the Alert',
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
      description: 'Use the icon prop to change the icon of the Alert',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const ColorType = ['primary', 'secondary', 'approval', 'danger'] as any;

const capFirstLetterInSentence = (sentence: string) => {
  let words = sentence.split(' ').map((word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return words.join(' ');
};

export const Basic = (args: IAlert) => (
  <Alert {...args} title="Alert">
    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
    Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her
    seven versalia, put her initial into the belt and made herself on the way.
  </Alert>
);

export const Color = (args: IAlert) => (
  <div className="vstack">
    {ColorType.map((e: TColorAlert, index: number) => (
      <Alert {...args} color={e} key={index} title={capFirstLetterInSentence(e)}>
        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
        Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her
        seven versalia, put her initial into the belt and made herself on the way.
      </Alert>
    ))}
  </div>
);
