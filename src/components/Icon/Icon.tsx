import React from 'react';
import { IIcon } from './Icon.types';
import { IconStyled } from './Icon.styles';

const Icon: React.FC<IIcon> = ({ name, color, size, teid, ...props }) => {
  return (
    <IconStyled color={color} size={size} data-te-id={teid} {...props}>
      <i className={`icon-${name}`} />
    </IconStyled>
  );
};

Icon.displayName = 'Icon';

export default Icon;
