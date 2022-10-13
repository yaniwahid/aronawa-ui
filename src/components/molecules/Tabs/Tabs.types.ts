import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export interface ITabs extends SpaceProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultActive?: number;
  onChange?: (index: number) => void;
}

export interface ITabItem {
  title: ReactNode;
}

export interface IStyle {
  isSelected?: boolean;
}
