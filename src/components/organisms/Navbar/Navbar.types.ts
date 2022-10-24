import { ReactNode } from 'react';

export interface INavbar {
  logoUrl?: string;
  navbarMenu?: ReactNode;
  avatarUrl?: string;
  username?: string;
  userMenu?: ReactNode;
  children?: ReactNode;
}
