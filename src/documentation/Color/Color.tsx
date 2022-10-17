import React, { FC } from 'react';
import Box from '../../components/atoms/Box';
import Radius from '../../themes/Radius';
import Shadow from '../../themes/Shadow';

interface IColor {
  name: string;
  color?: string;
}

export const ColorDoc = ({ name, color }: IColor) => {
  return (
    <Box alignItems="center" display="flex">
      <Box
        borderRadius={Radius.dull}
        width="48px"
        height="48px"
        boxShadow={Shadow.platform}
        mr="4"
        bg={color}
      />
      <Box>
        <Box mb="1" fontWeight="600" fontSize="16px">
          {name}
        </Box>
        <Box>{color}</Box>
      </Box>
    </Box>
  );
};

export const ColorDocWrapper: FC = ({ children }) => (
  <Box display="grid" gridGap="6" gridTemplateColumns="repeat(3,1fr)" alignItems="start" mt="6">
    {children}
  </Box>
);
