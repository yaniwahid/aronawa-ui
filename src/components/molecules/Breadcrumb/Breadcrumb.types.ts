import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export interface IBreadcrumb extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
export interface IBreadcrumbItem extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: ReactNode;
}
