import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Pagination from '../Pagination';
import { IPagination } from './Pagination.types';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  argTypes: {
    total: {
      name: 'total',
      defaultValue: 100,
      description: 'Use the total prop to change the total of the Pagination',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
      control: {
        type: 'number',
      },
    },
    defaultCurrent: {
      name: 'defaultCurrent',
      defaultValue: 1,
      description: 'Use the defaultCurrent prop to change the defaultCurrent of the Pagination',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      control: {
        type: 'number',
      },
    },
    pageSize: {
      name: 'pageSize',
      defaultValue: 10,
      description: 'Use the pageSize prop to change the pageSize of the Pagination',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
      control: {
        type: 'number',
      },
    },
    showPageSize: {
      name: 'showPageSize',
      defaultValue: 3,
      description: 'Use the showPageSize prop to change the showPageSize of the Pagination',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: {
        type: 'number',
      },
    },
    variant: {
      name: 'variant',
      defaultValue: 'default',
      description: 'Use the variant prop to change the variant of the Paginationo',
      table: {
        type: { summary: 'default | withoutNumber | withSelect' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'radio',
        options: ['default', 'withoutNumber', 'withSelect'],
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

export const Basic = (args: IPagination) => {
  return <Pagination {...args} />;
};
