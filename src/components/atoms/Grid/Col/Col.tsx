import React, { FC } from 'react';
import { ICol } from '../Grid.types';
import { ColStyled } from './Col.styles';

const Col: FC<ICol> = ({ sm, md, lg, xl, offset, children, ...props }) => (
  <ColStyled className="col" sm={sm} md={md} lg={lg} xl={xl} offset={offset} {...props}>
    {children}
  </ColStyled>
);

export default Col;
