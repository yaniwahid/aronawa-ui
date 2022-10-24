import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Color from '../../../themes/Color';
import { DropdownItem } from '../../atoms/Dropdown';
import Icon from '../../atoms/Icon';
import Navbar from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

export const Basic = () => (
  <Navbar
    avatarUrl="https://bit.ly/dan-abramov"
    username="Dan Abrahmov"
    userMenu={
      <>
        <DropdownItem icon="user">Profil</DropdownItem>
        <DropdownItem icon="sign-out" color={Color.danger.default}>
          Keluar
        </DropdownItem>
      </>
    }
    navbarMenu={
      <>
        <Icon name="bell" color="#fff" size={20} />
        <Icon name="envelope" color="#fff" size={20} />
      </>
    }
  />
);
