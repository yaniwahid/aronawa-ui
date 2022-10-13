import { ReactNode } from 'react';
import { SpaceProps } from "styled-system";

export interface ISteps extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
  defaultActive?: number;
}

export interface IStepItem {
  title?: ReactNode;
  description?: ReactNode;
  isFailed?: boolean;
}

export interface IStyle {
  isSelected?: boolean;
  isDone?: boolean;
  isFailed?: boolean;
}