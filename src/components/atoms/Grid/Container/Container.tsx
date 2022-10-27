import React, { FC } from 'react';
import { IContainer } from '../Grid.types';
import { ContainerStyled } from './Container.styles';

const Container: FC<IContainer> = ({ gutter = 32, noPadding, children, isFullWidth, ...props }) => (
  <ContainerStyled gutter={gutter} noPadding={noPadding} isFullWidth={isFullWidth} {...props}>
    {children}
  </ContainerStyled>
);

export default Container;
