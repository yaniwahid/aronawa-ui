import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Empty from '../Empty';
import { IEmpty } from './Empty.types';

export default {
  title: 'Molecules/Empty',
  component: Empty,
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Empty Title',
      description: 'Use the title prop to change the title of the Empty',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    description: {
      name: 'description',
      defaultValue:
        'In the morning I walked down the Boulevard to the rue Soufflot for coffee and brioche. It was a fine morning. The horse-chestnut trees in the Luxembourg gardens were in bloom. There was the pleasant early-morning feeling of a hot day.',
      description: 'Use the description prop to change the description of the Empty',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    imageUrl: {
      name: 'imageUrl',
      defaultValue: 'https://static.bmdstatic.com/sf/assets/img/im_package_grey_128dp.svg',
      imageUrl: 'Use the imageUrl prop to change the imageUrl of the Empty',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    imageWidth: {
      name: 'imageWidth',
      defaultValue: '64px',
      imageWidth: 'Use the imageWidth prop to change the imageWidth of the Empty',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Empty>;

export const Basic = (args: IEmpty) => {
  return <Empty maxWidth={600} {...args} />;
};
