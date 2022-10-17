import { RangePickerProps } from 'rc-picker/lib/RangePicker';

export interface IDaterange
  extends Omit<
    RangePickerProps<any>,
    'picker' | 'locale' | 'generateConfig'
  > {
  picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;
  value?: any;
  defaultValue?: any;
  isDisabled?: boolean;
}
