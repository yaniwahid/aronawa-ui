import { Global } from '@emotion/react';
import { default as DropdownComponent } from 'rc-dropdown';
import React, { FC } from 'react';
import Icon from '../Icon';
import {
  DividerStyled,
  DropdownItemStyled,
  DropdownMenuStyled,
  DropdownStyled,
} from './Dropdown.styles';
import { IDropdown, IDropdownDivider, IDropdownItem, IDropdownMenu } from './Dropdown.types';

export const DropdownDivider: FC<IDropdownDivider> = ({ color }) => {
  return <DividerStyled color={color} />;
};

export const DropdownMenu: FC<IDropdownMenu> = ({ width, teid = 'dropdown-menu', children }) => {
  return (
    <DropdownMenuStyled width={width} data-testid={teid}>
      {children}
    </DropdownMenuStyled>
  );
};

export const DropdownItem: FC<IDropdownItem> = ({
  icon,
  color,
  hoverColor,
  hoverBackground,
  image,
  imageHover,
  teid = 'dropdown-item',
  children,
  ...props
}) => {
  return (
    <DropdownItemStyled
      color={color}
      hoverColor={hoverColor}
      hoverBackground={hoverBackground}
      data-testid={teid}
      {...props}
    >
      {icon && <Icon name={icon} style={{ marginRight: 8 }} size={14} />}
      {image && <img src={image} alt="Image" className="dropdown-image" />}
      {imageHover && <img src={imageHover} alt="Image Hover" className="dropdown-image-hover" />}
      {children}
    </DropdownItemStyled>
  );
};

const Dropdown: FC<IDropdown> = ({ children, teid = 'dropdown', ...props }) => {
  return (
    <>
      <Global styles={DropdownStyled} />
      <div data-testid={teid}>
        <DropdownComponent prefixCls="aronawa-dropdown" trigger={['click']} {...props}>
          {children}
        </DropdownComponent>
      </div>
    </>
  );
};

export default Dropdown;
