import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Preview from './Preview';
import { IPreview } from './Preview.types';

export default {
  title: 'Atoms/Preview',
  component: Preview,
  argTypes: {
    isClearable: {
      name: 'isClearable',
      defaultValue: false,
      description: 'Use the isClearable prop to change the isClearable of the Preview',
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
      description: 'Use the isInvalid prop to change the isInvalid of the Preview',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    imageUrl: {
      name: 'imageUrl',
      description: 'Use the imageUrl prop to change the imageUrl of the Preview',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    boxWidth: {
      name: 'boxWidth',
      defaultValue: '128px',
      description: 'Use the boxWidth prop to change the boxWidth of the Preview',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '128px' },
      },
      control: {
        type: 'text',
      },
    },
    boxHeight: {
      name: 'boxHeight',
      defaultValue: '128px',
      description: 'Use the boxHeight prop to change the boxHeight of the Preview',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '128px' },
      },
      control: {
        type: 'text',
      },
    },
    imageSize: {
      name: 'imageSize',
      defaultValue: '100%',
      description: 'Use the imageSize prop to change the imageSize of the Preview',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Preview>;

export const Basic = (args: IPreview) => <Preview {...args} />;

export const WithImage = (args: IPreview) => <Preview {...args} />;
WithImage.args = {
  imageUrl: 'https://static.bmdstatic.com/st/home/eaac05-BTS-Serba-10.-Full-Banner.jpg',
  boxWidth: '240px',
  boxHeight: '240px',
};

export const WithIcon = (args: IPreview) => <Preview {...args} />;
WithIcon.args = {
  imageUrl: 'https://static.bmdstatic.com/st/home/9e15b3-DIGITAL-PRODUCT.png',
  imageSize: '64px',
};
