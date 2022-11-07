import { Global } from '@emotion/react';
import { Dayjs } from 'dayjs';
import Picker from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/dayjs';
import en_US from 'rc-picker/lib/locale/en_US';
import React, { FC } from 'react';
import Icon from '../Icon';
import { DatepickerIcon, DatepickerStyled, DatepickerWrapper } from './Datepicker.styles';
import { IDatepicker } from './Datepicker.types';

const Datepicker: FC<IDatepicker> = ({
  picker = 'date',
  value = null,
  defaultValue,
  isDisabled,
  teid = 'datepiceker',
  ...props
}) => {
  return (
    <>
      <Global styles={DatepickerStyled} />
      <DatepickerWrapper date-testid={teid}>
        <Picker<Dayjs>
          prefixCls="aronawa-picker"
          picker={picker}
          generateConfig={generateConfig}
          locale={en_US}
          value={value}
          defaultValue={defaultValue}
          inputReadOnly
          disabled={isDisabled}
          {...props}
        />
        <DatepickerIcon>
          <Icon name="calender" size={18} />
        </DatepickerIcon>
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
