import React, { FC } from 'react';
import Icon from '../../atoms/Icon';
import Collapse, { CollapseItem } from '../../molecules/Collapse';
import { Item, ItemSub, ItemSubWrapper, Parent, SideMenuStyled, TextItem } from './SideMenu.styles';
import { ISideMenu, ISideMenuItem, ISideMenuParent, ISideMenuSub } from './SideMenu.types';

export const SideMenuItem: FC<ISideMenuItem> = ({ isActive, icon, link, label, content }) => {
  return (
    <Item isActive={isActive}>
      <a href={link}>
        {icon && <Icon size={20} name={icon} />}
        <TextItem>
          {label} {content}
        </TextItem>
      </a>
    </Item>
  );
};

export const SideMenuParent: FC<ISideMenuParent> = ({ title, children }) => {
  return (
    <Parent>
      <h4>{title}</h4>
      {children}
    </Parent>
  );
};

export const SideMenuSub: FC<ISideMenuSub> = ({ isActive, icon, label, children }) => {
  return (
    <ItemSubWrapper>
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

const SideMenu: FC<ISideMenu> = ({ children, ...props }) => {
  return <SideMenuStyled {...props}>{children}</SideMenuStyled>;
};

export default SideMenu;
