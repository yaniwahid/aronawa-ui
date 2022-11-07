import React, { FC } from 'react';
import Icon from '../../atoms/Icon';
import Collapse, { CollapseItem } from '../../molecules/Collapse';
import { Item, ItemSub, ItemSubWrapper, Parent, SideMenuStyled, TextItem } from './SideMenu.styles';
import { ISideMenu, ISideMenuItem, ISideMenuParent, ISideMenuSub } from './SideMenu.types';

export const SideMenuItem: FC<ISideMenuItem> = ({
  isActive,
  icon,
  link,
  label,
  content,
  teid = 'sidemenu-item',
}) => {
  return (
    <Item isActive={isActive} data-testid={teid}>
      <div onClick={link}>
        {icon && <Icon size={20} name={icon} />}
        <TextItem>
          {label} {content}
        </TextItem>
      </div>
    </Item>
  );
};

export const SideMenuParent: FC<ISideMenuParent> = ({
  title,
  teid = 'sidemenu-parent',
  children,
}) => {
  return (
    <Parent data-testid={teid}>
      <h4>{title}</h4>
      {children}
    </Parent>
  );
};

export const SideMenuSub: FC<ISideMenuSub> = ({
  isActive,
  icon,
  label,
  children,
  teid = 'sidemenu-sub',
}) => {
  return (
    <ItemSubWrapper data-testid={teid}>
      <Collapse>
        <CollapseItem
          isShow={isActive}
          title={
            <ItemSub>
              {icon && <Icon size={20} name={icon} />} <TextItem>{label}</TextItem>
            </ItemSub>
          }
        >
          {children}
        </CollapseItem>
      </Collapse>
    </ItemSubWrapper>
  );
};

const SideMenu: FC<ISideMenu> = ({ children, teid = 'sidemenu', ...props }) => {
  return (
    <SideMenuStyled data-testid={teid} {...props}>
      {children}
    </SideMenuStyled>
  );
};

export default SideMenu;
