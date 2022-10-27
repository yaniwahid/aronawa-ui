import { ReactNode } from 'react';

export interface ISteps extends React.HTMLAttributes<HTMLDivElement> {
  defaultActive?: number;
  children?: ReactNode;
}

export interface IStepItem {
  title?: ReactNode;
  description?: ReactNode;
  isFailed?: boolean;
  children?: ReactNode;
}

export interface IStyle {
  isSelected?: boolean;
  isDone?: boolean;
  isFailed?: boolean;
}
