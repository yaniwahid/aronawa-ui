import React, { FC } from 'react';
import { BadgeStyled, Close, IndicatorStyled } from './Badge.styles';
import { IBadge } from './Badge.types';

const Badge: FC<IBadge> = ({
  color = 'neutral',
  variant = 'solid',
  children,
  onClose,
  isClosable,
  ...props
}) => (
  <BadgeStyled color={color} variant={variant} {...props}>
    {variant === 'indicator' && <IndicatorStyled color={color} />}
    {children}
    {isClosable && <Close onClick={onClose}>&times;</Close>}
  </BadgeStyled>
);

export default Badge;
