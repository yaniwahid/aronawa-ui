import { ReactNode } from 'react';

export interface IBreadcrumb extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
export interface IBreadcrumbItem extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: ReactNode;
}
