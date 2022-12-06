import { TreeSelectProps } from 'rc-tree-select';
import { ReactNode } from 'react';

export interface ITreeSelect extends TreeSelectProps {
  isDisabled?: boolean;
  width?: number;
  children?: ReactNode;
  isSearchable?: boolean;
  teid?: string;
}
