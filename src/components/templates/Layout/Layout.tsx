import React from 'react';
import RenderIf from '../../../helpers/RenderIf';
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
  hasSideMenu = true,
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
      <RenderIf isTrue={!!hasSideMenu}>
        <SideMenu>{sideMenu}</SideMenu>
      </RenderIf>
      <ContentStyled hasSideMenu={hasSideMenu}>
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
