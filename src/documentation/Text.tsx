import React from 'react';
import Box from '../components/atoms/Box';

export const ComponentName = ({ children }: any) => (
  <Box fontSize="48px" mb="8" fontWeight="bold" borderBottom="1px solid #e3e5e8" pb="4">
    {children}
  </Box>
);

export const SectionName = ({ children }: any) => (
  <Box fontSize="24px" mt="72px" mb="6" fontWeight="bold">
    {children}
  </Box>
);
