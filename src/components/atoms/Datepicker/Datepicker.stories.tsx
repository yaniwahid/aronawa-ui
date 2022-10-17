import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Datepicker from './Datepicker';
import { IDatepicker } from './Datepicker.types';

export default {
  title: 'Atoms/Datepicker',
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;

export const Basic = (args: IDatepicker) => <Datepicker placeholder="Select Date" {...args} />;

export const MonthPicker = (args: IDatepicker) => (
  <Datepicker picker="month" placeholder="Select Month" {...args} />
);
