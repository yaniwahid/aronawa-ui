import React from 'react';
import { IconStyled } from './Icon.styles';
import { IIcon } from './Icon.types';

const Icon: React.FC<IIcon> = ({ name, color, size, ...props }) => {
  return (
    <IconStyled color={color} size={size} {...props}>
      <i className={`icon-${name}`} />
    </IconStyled>
  );
};

Icon.displayName = 'Icon';

export default Icon;
