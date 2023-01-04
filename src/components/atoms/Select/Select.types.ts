import { SelectProps } from 'rc-select/lib/Select';
import { ReactNode } from 'react';

export interface ISelect extends SelectProps {
  isDisabled?: boolean;
  width?: number;
  isSearchable?: boolean;
  children?: ReactNode;
  teid?: string;
  isLoading?: boolean;
}
