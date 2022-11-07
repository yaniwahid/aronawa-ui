import { ReactNode } from 'react';

export interface ISteps extends React.HTMLAttributes<HTMLDivElement> {
  defaultActive?: number;
  children?: ReactNode;
  teid?: string;
}

export interface IStepItem {
  title?: ReactNode;
  description?: ReactNode;
  isFailed?: boolean;
  children?: ReactNode;
  teid?: string;
}

export interface IStyle {
  isSelected?: boolean;
  isDone?: boolean;
  isFailed?: boolean;
}
