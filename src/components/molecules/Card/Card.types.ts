import { ReactNode } from 'react';

type TSizeCard = 'sm' | 'md' | 'lg';

export interface ICard {
  size?: TSizeCard;
  footer?: ReactNode;
  title?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
}
