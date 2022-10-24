import React, { FC } from 'react';
import { Icon } from '../../atoms';
import { AlertStyled, Close, Content, IconWrapper, Title } from './Alert.styles';
import { IAlert } from './Alert.types';

const Alert: FC<IAlert> = ({
  color = 'primary',
  title,
  isClosable,
  onClose,
  children,
  icon,
  teid = 'alert',
  ...props
}) => {
  return (
    <AlertStyled color={color} isClosable={isClosable} icon={icon} data-testid={teid} {...props}>
      {icon && (
        <IconWrapper>
          <Icon name={icon} size={18} />
        </IconWrapper>
      )}
      <Content>
        {title && <Title>{title}</Title>}
        {children}
      </Content>
      {isClosable && (
        <Close onClick={onClose}>
          <Icon name="cross" size={20} />
        </Close>
      )}
    </AlertStyled>
  );
};

export default Alert;
