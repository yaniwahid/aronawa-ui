import React, { FC } from 'react';
import { BreadcrumbItemStyled, BreadcrumbStyled } from './Breadcrumb.styles';
import { IBreadcrumb, IBreadcrumbItem } from './Breadcrumb.types';

export const BreadcrumbItem: FC<IBreadcrumbItem> = ({ title, children }) => {
  return <BreadcrumbItemStyled>{children}</BreadcrumbItemStyled>;
};

const Breadcrumb: FC<IBreadcrumb> = ({ children, ...props }) => {
  return <BreadcrumbStyled {...props}>{children}</BreadcrumbStyled>;
};

export default Breadcrumb;
