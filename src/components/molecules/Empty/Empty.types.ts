import { ReactNode } from 'react';

export interface IEmpty extends Omit<React.HTMLAttributes<HTMLInputElement>, 'title'> {
  imageUrl?: string;
  title: ReactNode;
  description?: ReactNode;
  imageWidth?: string | number;
  children?: ReactNode;
}
