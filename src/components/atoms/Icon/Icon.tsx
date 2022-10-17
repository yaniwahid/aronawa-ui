import React, { FC } from 'react';
import { IconStyled } from './Icon.styles';
import { IIcon } from './Icon.types';

const Icon: FC<IIcon> = ({ name, color, size, ...props }) => {
  return (
    <IconStyled color={color} size={size} {...props}>
      <i className={`ika-${name}`} />
    </IconStyled>
  );
};

export default Icon;
