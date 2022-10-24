import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export interface ISteps extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
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
