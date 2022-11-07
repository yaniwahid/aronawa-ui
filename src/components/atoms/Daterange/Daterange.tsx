import { Global } from '@emotion/react';
import { Dayjs } from 'dayjs';
import { RangePicker } from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/dayjs';
import en_US from 'rc-picker/lib/locale/en_US';
import React, { useRef } from 'react';
import {
  DatepickerIcon,
  DatepickerStyled,
  DatepickerWrapper,
} from '../Datepicker/Datepicker.styles';
import Icon from '../Icon';
import { IDaterange } from './Daterange.types';

const Daterange: React.FC<IDaterange> = ({
  value = null,
  defaultValue = null,
  picker = 'date',
  isDisabled,
  teid = 'daterange',
  ...props
}) => {
  const rangePickerRef = useRef<RangePicker<Dayjs>>(null);
  return (
    <>
      <Global styles={DatepickerStyled} />
      <DatepickerWrapper data-testid={teid}>
        <RangePicker<Dayjs>
          picker={picker}
          prefixCls="aronawa-picker"
          generateConfig={generateConfig}
          locale={en_US}
          value={value}
          defaultValue={defaultValue}
          ref={rangePickerRef}
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

export default Daterange;
