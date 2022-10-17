import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Daterange from './Daterange';
import { IDaterange } from './Daterange.types';

export default {
  title: 'Atoms/Daterange',
  component: Daterange,
} as ComponentMeta<typeof Daterange>;

export const Basic = (args: IDaterange) => <Daterange {...args} />;
