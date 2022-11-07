import { ReactNode } from 'react';

export interface ITabs extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultActive?: number;
  onChange?: (index: number) => void;
  children?: ReactNode;
  teid?: string;
}

export interface ITabItem {
  title: ReactNode;
  children?: ReactNode;
  teid?: string;
}

export interface IStyle {
  isSelected?: boolean;
}
