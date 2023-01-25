import { ReactNode } from 'react';

export interface IError {
  title?: string;
  code?: string;
  description?: ReactNode;
  imageUrl?: string;
}
