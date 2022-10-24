import { ReactNode } from 'react';

export interface ILayout {
  title?: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  back?: string;
  logoUrl?: string;
  navbarMenu?: ReactNode;
  avatarUrl?: string;
  username?: string;
  userMenu?: ReactNode;
  sideMenu?: ReactNode;
  children?: ReactNode;
}
