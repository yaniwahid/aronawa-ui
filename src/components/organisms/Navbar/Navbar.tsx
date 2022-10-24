import React from 'react';
import Dropdown, { DropdownMenu } from '../../atoms/Dropdown';
import { NavbarContainer, NavbarLogo, NavbarMenu, NavbarStyled, UserMenu } from './Navbar.styles';
import { INavbar } from './Navbar.types';

const Navbar: React.FC<INavbar> = ({
  logoUrl = 'https://static.bmdstatic.com/sf/assets/img/bhinneka-logo.svg',
  navbarMenu,
  username,
  avatarUrl,
  userMenu,
}) => {
  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavbarLogo>
          <img src={logoUrl} alt="Logo" />
        </NavbarLogo>
        <NavbarMenu>
          {navbarMenu}
          <UserMenu>
            <Dropdown overlay={<DropdownMenu width={200}>{userMenu}</DropdownMenu>}>
              <img src={avatarUrl} alt={username} />
            </Dropdown>
          </UserMenu>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarStyled>
  );
};

export default Navbar;
