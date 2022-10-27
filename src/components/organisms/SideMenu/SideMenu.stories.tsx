import { ComponentMeta } from '@storybook/react';
import React from 'react';
import SideMenu, { SideMenuItem, SideMenuSub } from './SideMenu';

export default {
  title: 'Organisms/SideMenu',
  component: SideMenu,
  argTypes: {},
} as ComponentMeta<typeof SideMenu>;

export const Basic = () => (
  <SideMenu>
    <SideMenuItem isActive icon="dashboard" label="Dashboard" />
    <SideMenuItem icon="grid" label="Page Builder" />
    <SideMenuSub label="Setting" icon="cog">
      <SideMenuItem label="Header" />
      <SideMenuItem label="Footer" />
    </SideMenuSub>
  </SideMenu>
);
