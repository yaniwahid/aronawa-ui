import { Global } from '@emotion/react';
import { default as SelectComponent, Option } from 'rc-select';
import React, { FC } from 'react';
import Icon from '../Icon';
import { SelectStyled } from './Select.styles';
import { ISelect } from './Select.types';

const Select: FC<ISelect> = ({ children, ...props }) => {
  return (
    <>
      <Global styles={SelectStyled} />
      <SelectComponent
        prefixCls="aronawa-select"
        inputIcon={<Icon name="angle-down" size={20} />}
        clearIcon={<Icon name="cancel" size={18} />}
        {...props}
      >
        {children}
      </SelectComponent>
    </>
  );
};

export default Select;
export { Option };
