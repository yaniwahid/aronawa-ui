import { SelectProps } from 'rc-select/lib/Select';

export interface ISelect extends SelectProps {
  isDisabled?: boolean;
  width?: number;
  isSearchable?: boolean;
}
