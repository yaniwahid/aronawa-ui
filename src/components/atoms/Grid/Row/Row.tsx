import React, { FC } from 'react';
import { IRow } from '../Grid.types';
import { RowStyled } from './Row.styles';

const Row: FC<IRow> = ({ noGutter, gutter, children, ...props }) => (
  <RowStyled className="row" gutter={gutter} noGutter={noGutter} {...props}>
    {children}
  </RowStyled>
);

export default Row;
