import { ReactNode } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

export interface IEmpty
  extends SpaceProps,
    LayoutProps,
    Omit<React.HTMLAttributes<HTMLInputElement>, 'title'> {
  imageUrl?: string;
  title: ReactNode;
  description?: ReactNode;
  imageWidth?: string | number;
  children?: ReactNode;
}
