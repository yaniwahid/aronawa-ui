import { DropdownProps } from 'rc-dropdown/lib/Dropdown';
import { ColorProps, SpaceProps } from 'styled-system';

export interface IDropdown extends DropdownProps {}

export interface IDropdownMenu {
  width?: number;
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
}

export interface IDropdownDivider {
  color?: string;
}
