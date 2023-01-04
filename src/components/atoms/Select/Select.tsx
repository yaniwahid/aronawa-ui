import { Global } from '@emotion/react';
import { default as SelectComponent } from 'rc-select';
import React, { FC } from 'react';
import Icon from '../Icon';
import { SelectStyled, SelectWrapper } from './Select.styles';
import { ISelect } from './Select.types';

const Select: FC<ISelect> = ({
  isDisabled,
  children,
  width,
  isSearchable,
  teid = 'select',
  isLoading,
  ...props
}) => {
  return (
    <>
      <Global styles={SelectStyled} />
      <SelectWrapper
        data-testid={teid}
        {...(width && {
          style: { minWidth: width, maxWidth: width },
        })}
      >
        <SelectComponent
          prefixCls="aronawa-select"
          inputIcon={<Icon name={isSearchable ? 'search' : 'angle-down'} size={18} />}
          clearIcon={<Icon name="cross" size={16} />}
          disabled={isDisabled}
          loading={isLoading}
          menuItemSelectedIcon={<Icon name="check" color="#2f78cf" size={16} />}
          {...(width && {
            style: { minWidth: width, maxWidth: width },
          })}
          {...props}
        >
          {children}
        </SelectComponent>
      </SelectWrapper>
    </>
  );
};

export default Select;

export const Option = SelectComponent.Option;
