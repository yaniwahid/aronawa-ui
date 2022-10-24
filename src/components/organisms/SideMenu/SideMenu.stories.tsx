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
    <SideMenuItem isActive icon="dashboard" link="/dashboard" label="Dashboard" />
    <SideMenuItem icon="grid" link="/produk" label="Page Builder" />
    <SideMenuSub label="Setting" icon="cog">
      <SideMenuItem link="/pengaturan" label="Header" />
      <SideMenuItem link="/pengaturan" label="Footer" />
    </SideMenuSub>
  </SideMenu>
);
