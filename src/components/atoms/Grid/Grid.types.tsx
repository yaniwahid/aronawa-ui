import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export interface IRow extends React.HTMLAttributes<HTMLDivElement> {
  noGutter?: boolean;
  gutter?: number;
  children?: ReactNode;
}

export interface IContainer extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
  gutter?: number;
  noPadding?: boolean;
  isFullWidth?: boolean;
  children?: ReactNode;
}

export interface ICol extends React.HTMLAttributes<HTMLDivElement> {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  offset?: number;
  children?: ReactNode;
}
