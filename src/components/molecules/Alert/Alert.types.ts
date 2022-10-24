import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';

export type TColorAlert = 'primary' | 'secondary' | 'approval' | 'danger';

export interface IAlert extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
  color?: TColorAlert;
  title?: string;
  isClosable?: boolean;
  icon?: string;
  onClose?: (e: any) => void;
  teid?: string;
  children?: ReactNode;
}
