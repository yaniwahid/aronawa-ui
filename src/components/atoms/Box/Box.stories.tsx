import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Box from './Box';

export default {
  title: 'Atoms/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Basic = () => (
  <Box bg="tomato" width="100%" p="4" color="white">
    This is the Box
  </Box>
);
