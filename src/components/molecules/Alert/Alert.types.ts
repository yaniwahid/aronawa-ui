import { ReactNode } from 'react';

export type TColorAlert = 'primary' | 'secondary' | 'approval' | 'danger';

export interface IAlert extends React.HTMLAttributes<HTMLDivElement> {
  color?: TColorAlert;
  title?: string;
  isClosable?: boolean;
  icon?: string;
  onClose?: (e: any) => void;
  teid?: string;
  children?: ReactNode;
}
