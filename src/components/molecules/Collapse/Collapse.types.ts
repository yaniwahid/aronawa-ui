import { ReactNode } from 'react';

export interface ICollapseItem {
  title: ReactNode;
  defaultShow?: boolean;
  isDisabled?: boolean;
  isShow?: boolean;
  children?: ReactNode;
}

export interface ICollapse extends React.HTMLAttributes<HTMLDivElement> {
  teid?: string;
  children?: ReactNode;
}

export interface IStyle {
  isShow?: boolean;
  isDisabled?: boolean;
}
