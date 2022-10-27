import React, { FC } from 'react';
import { DividerStyled } from './Divider.styles';
import { IDivider } from './Divider.types';

const Divider: FC<IDivider> = ({ color, my, mx, ...props }) => {
  return <DividerStyled color={color} my={my} mx={mx} {...props} />;
};

export default Divider;
