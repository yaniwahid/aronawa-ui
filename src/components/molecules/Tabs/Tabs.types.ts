import { ReactNode } from 'react';

export interface ITabs extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultActive?: number;
  onChange?: (index: number) => void;
  children?: ReactNode;
}

export interface ITabItem {
  title: ReactNode;
  children?: ReactNode;
}

export interface IStyle {
  isSelected?: boolean;
}
