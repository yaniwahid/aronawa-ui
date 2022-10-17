import { Global } from '@emotion/react';
import { RangePicker } from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/dayjs';
import id_ID from 'rc-picker/lib/locale/id_ID';
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
  ...props
}) => {
  const rangePickerRef = useRef<RangePicker<any>>(null);
  return (
    <>
      <Global styles={DatepickerStyled} />
      <DatepickerWrapper>
        <RangePicker<any>
          picker={picker}
          prefixCls="aronawa-picker"
          generateConfig={generateConfig}
          locale={id_ID}
          value={value}
          defaultValue={defaultValue}
          ref={rangePickerRef}
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

export default Daterange;
