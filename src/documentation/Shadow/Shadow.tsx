import React, { FC } from 'react';
import Box from '../../components/atoms/Box';
import Color from '../../themes/Color';
import Radius from '../../themes/Radius';

interface IShadow {
  name: string;
  shadow?: string;
}

export const ShadowDoc = ({ name, shadow }: IShadow) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      width="100%"
      height="160px"
      borderRadius={Radius.dull}
      boxShadow={shadow}
      justifyContent="center"
      bg={Color.slate[50]}
    >
      <Box fontSize="16px">{name}</Box>
    </Box>
  );
};

export const ShadowDocWrapper: FC = ({ children }) => (
  <Box display="grid" gridGap="6" gridTemplateColumns="repeat(3,1fr)" alignItems="start">
    {children}
  </Box>
);
