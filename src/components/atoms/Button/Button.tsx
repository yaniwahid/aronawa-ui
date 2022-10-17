import React, { FC } from 'react';
import Icon from '../Icon';
import { ButtonStyled, Loading } from './Button.styles';
import { IButton } from './Button.types';

const Button: FC<IButton> = ({
  color = 'neutral',
  variant = 'solid',
  size,
  target,
  type,
  isDisabled,
  isFullWidth,
  isLoading,
  icon,
  rightIcon,
  href,
  as,
  teid = 'button',
  children,
  ...props
}) => {
  let childCount = 0;
  React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
    childCount++;
  });

  const asProp = () => {
    if (href) {
      return 'a';
    }
    return 'button';
  };
  const buttonProps = {
    color: color,
    variant: variant,
    size: size,
    isDisabled: isDisabled || isLoading,
    disabled: isDisabled || isLoading,
    isFullWidth: isFullWidth,
    href: href,
    target: target,
    'data-testid': teid,
    ...(childCount != 1 && {
      p: '0',
    }),
  };
  return (
    <ButtonStyled as={asProp()} {...buttonProps} {...props}>
      {isLoading && (
        <Loading hasChild={childCount === 1}>
          <span />
        </Loading>
      )}
      {icon && !isLoading && <Icon name={icon} {...(childCount === 1 && { mr: '2' })} />}
      {children}
      {rightIcon && !isLoading && <Icon name={rightIcon} ml="2" />}
    </ButtonStyled>
  );
};

export default Button;
