import { Moment } from 'moment';
import { PickerProps } from 'rc-picker/lib/Picker';

export interface IDatepicker
  extends Omit<PickerProps<Moment>, 'picker' | 'locale' | 'generateConfig'> {
  picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;
  value?: any;
  defaultValue?: any;
  isDisabled?: boolean;
}
