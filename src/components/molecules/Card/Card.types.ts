import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

type TSizeCard = 'sm' | 'md' | 'lg';

export interface ICard extends SpaceProps {
  size?: TSizeCard;
  footer?: ReactNode;
  title?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
}
