import React, { FC } from 'react';
import {
  CardBody,
  CardFooterStyled,
  CardHeaderStyled,
  CardStyled,
  Extra,
  Title,
} from './Card.styles';
import { ICard } from './Card.types';

const CardHeader: FC<ICard> = ({ title, size, extra }) => {
  return (
    <CardHeaderStyled size={size}>
      <Title>{title}</Title>
      {extra && <Extra>{extra}</Extra>}
    </CardHeaderStyled>
  );
};

const CardFooter: FC<ICard> = ({ children, size }) => {
  return <CardFooterStyled size={size}>{children}</CardFooterStyled>;
};

const Card: FC<ICard> = ({ title, size, extra, children, footer, ...props }) => {
  return (
    <CardStyled {...props}>
      {title && <CardHeader title={title} extra={extra} size={size} />}
      <CardBody size={size}>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardStyled>
  );
};

export default Card;
