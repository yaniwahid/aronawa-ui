import { ReactNode } from 'react';

export interface ISideMenu extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface ISideMenuItem {
  isActive?: boolean;
  icon?: string;
  link?: any;
  label?: string;
  defaultSelected?: number | string;
  content?: ReactNode;
  children?: ReactNode;
}
export interface ISideMenuParent {
  title?: string;
  children?: ReactNode;
}
export interface ISideMenuSub {
  isActive?: boolean;
  icon?: string;
  label?: string;
  defaultSelected?: number | string;
  children?: ReactNode;
}
