import React, { FC } from 'react';
import Box from '../../components/atoms/Box';
import Icon from '../../components/atoms/Icon';
import Color from '../../themes/Color';
import Radius from '../../themes/Radius';
import Shadow from '../../themes/Shadow';
import { data } from './IconData';

interface IIcon {
  name?: string;
}

export const IconDoc = ({ name }: IIcon) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Box
        width="14"
        height="14"
        justifyContent="center"
        alignItems="center"
        backgroundColor={Color.slate[50]}
        borderRadius={Radius.dull}
        boxShadow={Shadow.platform}
        display="flex"
        p="2"
      >
        <Icon name={name} size={40} />
      </Box>
      <Box mt="2" fontSize="x-small" textAlign="center">
        {name}
      </Box>
    </Box>
  );
};

export const IconDocs = () => {
  return data.map((item) => <IconDoc name={item.name} />);
};

export const IconDocWrapper: FC = ({ children }) => (
  <Box display="grid" gridGap="6" gridTemplateColumns="repeat(8,1fr)" alignItems="start">
    {children}
  </Box>
);
