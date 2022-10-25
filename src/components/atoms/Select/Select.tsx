import { Global } from '@emotion/react';
import { default as OptionComponent, OptionProps } from 'rc-select/lib/Option';
import { default as SelectComponent } from 'rc-select/lib/Select';
import React, { FC } from 'react';
import Icon from '../Icon';
import { SelectStyled } from './Select.styles';
import { ISelect } from './Select.types';

export const Option: FC<OptionProps> = ({ ...props }) => {
  return <OptionComponent {...props} />;
};

const Select: FC<ISelect> = ({ isDisabled, children, width, isSearchable, ...props }) => {
  return (
    <>
      <Global styles={SelectStyled} />
      <SelectComponent
        prefixCls="aronawa-select"
        inputIcon={<Icon name={isSearchable ? 'search' : 'angle-down'} size={18} />}
        clearIcon={<Icon name="cross" size={16} />}
        disabled={isDisabled}
        {...(width && {
          style: { minWidth: width, maxWidth: width },
        })}
        {...props}
      >
        {children}
      </SelectComponent>
    </>
  );
};

export default Select;
