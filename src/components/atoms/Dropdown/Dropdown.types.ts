import { DropdownProps } from 'rc-dropdown/lib/Dropdown';
import { ColorProps, SpaceProps } from 'styled-system';

export interface IDropdown extends DropdownProps {
}

export interface IDropdownItem extends SpaceProps, ColorProps {
  icon?: string;
}
