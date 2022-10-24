import { DropdownProps } from 'rc-dropdown/lib/Dropdown';
import { ReactNode } from 'react';

export interface IDropdown extends DropdownProps {}

export interface IDropdownMenu {
  width?: number;
  children?: ReactNode;
}

export interface IDropdownItem extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  icon?: string;
  hoverColor?: string;
  hoverBackground?: string;
  color?: string;
  image?: string;
  imageHover?: string;
  children?: ReactNode;
}

export interface IDropdownDivider {
  color?: string;
}
