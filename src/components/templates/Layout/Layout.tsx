import React from 'react';
import PageHeader from '../../molecules/PageHeader';
import Navbar from '../../organisms/Navbar';
import SideMenu from '../../organisms/SideMenu';
import { ContentStyled, LayoutStyled } from './Layout.styles';
import { ILayout } from './Layout.types';

const Layout: React.FC<ILayout> = ({
  title,
  subtitle,
  action,
  logoUrl,
  navbarMenu,
  avatarUrl,
  username,
  userMenu,
  sideMenu,
  back,
  children,
}) => {
  return (
    <LayoutStyled>
      <Navbar
        logoUrl={logoUrl}
        navbarMenu={navbarMenu}
        avatarUrl={avatarUrl}
        username={username}
        userMenu={userMenu}
      />
      <SideMenu>{sideMenu}</SideMenu>
      <ContentStyled>
        {title && (
          <PageHeader title={title} subtitle={subtitle} back={back}>
            {action}
          </PageHeader>
        )}
        {children}
      </ContentStyled>
    </LayoutStyled>
  );
};

export default Layout;
