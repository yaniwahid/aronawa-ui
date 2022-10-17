import React, { FC } from 'react';
import Box from '../../components/atoms/Box';
import Color from '../../themes/Color';
import Shadow from '../../themes/Shadow';

interface IRadius {
  name: string;
  radius?: string;
}

export const RadiusDoc = ({ name, radius }: IRadius) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      width="160px"
      height="160px"
      borderRadius={radius}
      boxShadow={Shadow.platform}
      justifyContent="center"
      border={`1px solid ${Color.slate[200]}`}
      margin="0 auto"
      bg={Color.slate[50]}
    >
      <Box fontSize="16px">{name}</Box>
    </Box>
  );
};

export const RadiusDocWrapper: FC = ({ children }) => (
  <Box
    display="grid"
    gridGap="6"
    gridTemplateColumns="repeat(3,1fr)"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
);
