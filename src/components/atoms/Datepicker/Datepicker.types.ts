import { Dayjs } from 'dayjs';
import { PickerProps } from 'rc-picker/lib/Picker';

export interface IDatepicker
  extends Omit<PickerProps<Dayjs>, 'picker' | 'locale' | 'generateConfig'> {
  picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;
  value?: any;
  defaultValue?: any;
  isDisabled?: boolean;
  teid?: string;
}
