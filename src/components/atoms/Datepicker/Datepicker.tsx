import { Global } from '@emotion/react';
import Picker from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/dayjs';
import id_ID from 'rc-picker/lib/locale/id_ID';
import React, { FC } from 'react';
import Icon from '../Icon';
import { DatepickerIcon, DatepickerStyled, DatepickerWrapper } from './Datepicker.styles';
import { IDatepicker } from './Datepicker.types';

export const localeCustom = {
  ...id_ID,
  now: 'Hari Ini',
  ok: 'Simpan',
};

const Datepicker: FC<IDatepicker> = ({
  picker = 'date',
  value = null,
  defaultValue,
  isDisabled,
  ...props
}) => {
  return (
    <>
      <Global styles={DatepickerStyled} />
      <DatepickerWrapper>
        <Picker<any>
          prefixCls="aronawa-picker"
          picker={picker}
          generateConfig={generateConfig}
          locale={localeCustom}
          value={value}
          defaultValue={defaultValue}
          inputReadOnly
          disabled={isDisabled}
          {...props}
        />
        <DatepickerIcon>
          <Icon name="event" size={18} />
        </DatepickerIcon>
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
