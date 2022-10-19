import React, { FC } from 'react';
import { DividerStyled } from './Divider.styles';
import { IDivider } from './Divider.types';

const Divider: FC<IDivider> = ({ color, ...props }) => {
  return <DividerStyled color={color} {...props} />;
};

export default Divider;
