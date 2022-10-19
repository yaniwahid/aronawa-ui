import { Global } from '@emotion/react';
import { default as DropdownComponent } from 'rc-dropdown';
import React, { FC } from 'react';
import Icon from '../Icon';
import { DropdownItemStyled, DropdownMenuStyled, DropdownStyled } from './Dropdown.styles';
import { IDropdown, IDropdownItem, IDropdownMenu } from './Dropdown.types';

export const DropdownMenu: FC<IDropdownMenu> = ({ width, children }) => {
  return <DropdownMenuStyled width={width}>{children}</DropdownMenuStyled>;
};

export const DropdownItem: FC<IDropdownItem> = ({ icon, children, ...props }) => {
  return (
    <DropdownItemStyled {...props}>
      {icon && <Icon name={icon} mr="2" size={14} />}
      {children}
    </DropdownItemStyled>
  );
};

const Dropdown: FC<IDropdown> = ({ children, ...props }) => {
  return (
    <>
      <Global styles={DropdownStyled} />
      <DropdownComponent prefixCls="aronawa-dropdown" trigger={['click']} {...props}>
        {children}
      </DropdownComponent>
    </>
  );
};

export default Dropdown;
