import { DropdownProps } from 'rc-dropdown/lib/Dropdown';
import { ReactNode } from 'react';
import { ColorProps, SpaceProps } from 'styled-system';

export interface IDropdown extends DropdownProps {}

export interface IDropdownMenu {
  width?: number;
  children?: ReactNode;
}

export interface IDropdownItem
  extends SpaceProps,
    ColorProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
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
