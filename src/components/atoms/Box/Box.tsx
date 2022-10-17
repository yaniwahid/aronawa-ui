import React, { FC } from 'react';
import { BoxStyled } from './Box.styles';
import { IBox } from './Box.types';

const Box: FC<IBox> = ({ children, ...props }) => {
  return <BoxStyled {...props}>{children}</BoxStyled>;
};

export default Box;
