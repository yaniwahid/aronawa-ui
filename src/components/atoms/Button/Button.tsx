import React, { FC } from 'react';
import { ButtonStyled } from './Button.styles';
import { IButton } from './Button.types';

const Button: FC<IButton> = ({
  color,
  variant,
  size,
  target,
  type,
  isDisabled,
  isFullWidth,
  isLoading,
  leftIcon,
  rightIcon,
  href,
  as,
  teid,
  children,
  ...props
}) => {
  let childCount = 0;
  React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
    childCount++;
  });
  const buttonProps = {
    color: color,
    size: size,
    isDisabled: isDisabled,
    disabled: isDisabled,
    ...(isFullWidth && { width: '100%' }),
    ...(childCount != 1 && {
      p: '0',
    }),
  };
  return (
    <ButtonStyled {...buttonProps} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
