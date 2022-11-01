import { ReactNode } from 'react';

export interface IPageHeader {
  title?: ReactNode;
  subtitle?: ReactNode;
  breadcrumb?: ReactNode;
  back?: any;
  children?: ReactNode;
}
