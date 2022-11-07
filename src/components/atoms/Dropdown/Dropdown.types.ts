import { DropdownProps } from 'rc-dropdown/lib/Dropdown';
import { ReactNode } from 'react';

export interface IDropdown extends DropdownProps {
  teid?: string;
}

export interface IDropdownMenu {
  width?: number;
  children?: ReactNode;
  teid?: string;
}

export interface IDropdownItem extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
  hoverColor?: string;
  hoverBackground?: string;
  color?: string;
  image?: string;
  imageHover?: string;
  children?: ReactNode;
  teid?: string;
}

export interface IDropdownDivider {
  color?: string;
}
