import React, { FC, useState } from 'react';
import Sticky from 'react-stickynode';
import Button from '../../atoms/Button';
import Divider from '../../atoms/Divider';
import Dropdown, { DropdownDivider, DropdownItem, DropdownMenu } from '../../atoms/Dropdown';
import Container from '../../atoms/Grid/Container';
import Input from '../../atoms/Input';
import Drawer from '../Drawer/Drawer';
import {
  ButtonStyled,
  CategoriesText,
  Counter,
  HeaderAfterLogin,
  HeaderBeforeLogin,
  HeaderCategories,
  HeaderDesktop,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuList,
  HeaderMobile,
  HeaderMobileBottom,
  HeaderMobileMenu,
  HeaderMobileTop,
  HeaderSearch,
  HeaderStyled,
  MenuMobileItemLeft,
  MenuMobileItemRight,
  MenuMobileItemStyled,
  MenuMobileList,
  MenuMobileParentStyled,
} from './Header.styles';
import { IHeader, IMenuItem } from './Header.types';

const Header: FC<IHeader> = ({
  logo = 'https://static.bmdstatic.com/sf/assets/img/bhinneka-logo.svg',
  logoLink = '/',
  headerBackground = '#fff',
  categoriesText = 'Categories',
  categoriesTextColor = '#121212',
  categoriesIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-down-512.png',
  searchText = 'Search',
  searchTexColor = '#7C8187',
  searchBackground = '#fff',
  serachOutline = '#A5AAB0',
  searchIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png',
  userIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/user-512.png',
  counterTextColor = '#fff',
  counterBackground = '#104D97',
  counterOutline = '#fff',
  cartIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/shopping-cart-512.png',
  menuTextColor = '#fff',
  menuBackground = '#104D97',
  menuItems,
  buttonLoginText = 'Login',
  buttonLoginTextColor = '#fff',
  buttonLoginBackground = '#1984FB',
  buttonRegisterText = 'Register',
  buttonRegisterTextColor = '#121212',
  buttonRegisterBackground = '#FED330',
  mobileMenuIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/menu-512.png',
  mobileLoginIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/log-in-512.png',
  textColor = '#121212',
  popoverBackground = '#fff',
  separatorLineColor = '#D7DADE',
  hoverText = '##2F78CF',
  hoverBackground = '#F5F7FA',
  myAccountIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/user-512.png',
  myAccountIconHover = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/user-check-512.png',
  myAccountText = 'My Account',
  transactionIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/file-minus-512.png',
  transactionIconHover = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/file-text-512.png',
  transactionText = 'Transaction',
  logoutIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/log-out-512.png',
  logoutIconHover = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/log-in-128.png',
  logoutText = 'Logout',
  mobileShopText = 'Shop',
  mobileShopTextColor = '#121212',
  mobileAccountText = 'My Account',
  mobileAccountTextColor = '#121212',
  mobileCategoriesIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/tag-128.png',
  mobileCloseIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/x-128.png',
  mobileArrowIcon = 'https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-right-128.png',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onMenu = () => setIsOpen(true);
  const onCloseMenu = () => setIsOpen(false);
  const menu = (
    <DropdownMenu width={180}>
      <DropdownItem
        color={textColor}
        hoverColor={hoverText}
        hoverBackground={hoverBackground}
        image={myAccountIcon}
        imageHover={myAccountIconHover}
      >
        {myAccountText}
      </DropdownItem>
      <DropdownItem
        color={textColor}
        hoverColor={hoverText}
        hoverBackground={hoverBackground}
        image={transactionIcon}
        imageHover={transactionIconHover}
      >
        {transactionText}
      </DropdownItem>
      <DropdownDivider color={separatorLineColor} />
      <DropdownItem
        color={textColor}
        hoverColor={hoverText}
        hoverBackground={hoverBackground}
        image={logoutIcon}
        imageHover={logoutIconHover}
      >
        {logoutText}
      </DropdownItem>
    </DropdownMenu>
  );
  const HeaderSearchRender = () => {
    return (
      <HeaderSearch
        color={searchTexColor}
        background={searchBackground}
        outline={serachOutline}
        className="header-search"
      >
        <Input
          size="lg"
          placeholder={searchText}
          rightElement={<img src={searchIcon} alt={searchText} />}
        />
      </HeaderSearch>
    );
  };
  const HeaderLogoRender = () => {
    return (
      <HeaderLogo>
        <a href={logoLink}>
          <img src={logo} title="Logo" />
        </a>
      </HeaderLogo>
    );
  };
  const HeaderCartRender = () => {
    return (
      <a href="/">
        <img src={cartIcon} alt="Cart" />
        <Counter background={counterBackground} color={counterTextColor} outline={counterOutline}>
          99+
        </Counter>
      </a>
    );
  };
  const MenuMobileItem: FC<any> = ({ image, arrow, link, title, color }) => {
    return (
      <MenuMobileItemStyled color={color}>
        <a href={link}>
          <MenuMobileItemLeft>
            <img src={image} alt="title" />
            <span>{title}</span>
          </MenuMobileItemLeft>
          {arrow && (
            <MenuMobileItemRight>
              <img src={arrow} alt={title} />
            </MenuMobileItemRight>
          )}
        </a>
      </MenuMobileItemStyled>
    );
  };
  const MenuMobileParent: FC<any> = ({ title, children, color }) => {
    return (
      <MenuMobileParentStyled color={color}>
        <h5>{title}</h5>
        {children}
      </MenuMobileParentStyled>
    );
  };
  return (
    <HeaderStyled>
      <Sticky enabled={true}>
        <HeaderDesktop background={headerBackground}>
          <Container>
            <HeaderLogo>
              <a href={logoLink}>
                <img src={logo} title="Logo" />
              </a>
            </HeaderLogo>
            <HeaderCategories>
              <CategoriesText color={categoriesTextColor}>{categoriesText}</CategoriesText>
              <img src={categoriesIcon} alt={categoriesText} />
            </HeaderCategories>
            <HeaderSearchRender />
            <HeaderBeforeLogin>
              <ButtonStyled background={buttonLoginBackground} color={buttonLoginTextColor}>
                <Button size="lg">{buttonLoginText}</Button>
              </ButtonStyled>
              <ButtonStyled background={buttonRegisterBackground} color={buttonRegisterTextColor}>
                <Button size="lg">{buttonRegisterText}</Button>
              </ButtonStyled>
            </HeaderBeforeLogin>
            <HeaderAfterLogin>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                getPopupContainer={(trigger: any) => trigger.parentNode}
                overlayStyle={{ backgroundColor: popoverBackground }}
              >
                <img src={userIcon} alt="User" />
              </Dropdown>
              <HeaderCartRender />
            </HeaderAfterLogin>
          </Container>
        </HeaderDesktop>
      </Sticky>
      <HeaderMobile background={headerBackground}>
        <HeaderMobileTop>
          <HeaderLogoRender />
        </HeaderMobileTop>
        <Sticky enabled={true}>
          <HeaderMobileBottom background={headerBackground} className="header-mobile-bottom">
            <HeaderMobileMenu className="header-mobile-menu" onClick={onMenu}>
              <img src={mobileMenuIcon} alt="Menu" />
            </HeaderMobileMenu>
            <HeaderSearchRender />
            <HeaderBeforeLogin className="header-mobile-action">
              <a href="/">
                <img src={mobileLoginIcon} alt="Login" />
              </a>
            </HeaderBeforeLogin>
            {/* <HeaderAfterLogin className="header-mobile-action">
              <HeaderCartRender />
            </HeaderAfterLogin> */}
          </HeaderMobileBottom>
        </Sticky>
        <Drawer
          isOpen={isOpen}
          onClose={onCloseMenu}
          placement="left"
          isNoFooter
          isMaskBlack
          size="sm"
          closeIcon={mobileCloseIcon}
          background={popoverBackground}
        >
          <MenuMobileList>
            <MenuMobileParent title={mobileShopText} color={mobileShopTextColor}>
              <MenuMobileItem
                title={categoriesText}
                color={textColor}
                image={mobileCategoriesIcon}
                arrow={mobileArrowIcon}
              />
            </MenuMobileParent>
            <MenuMobileParent title={mobileAccountText} color={mobileAccountTextColor}>
              <MenuMobileItem title={myAccountText} color={textColor} image={myAccountIcon} />
              <MenuMobileItem title={transactionText} color={textColor} image={transactionIcon} />
            </MenuMobileParent>
            <Divider mt="16px !important" mb="-16px !important" color={separatorLineColor} />
            <MenuMobileItem title={logoutText} color={textColor} image={logoutIcon} />
          </MenuMobileList>
        </Drawer>
      </HeaderMobile>
      <HeaderMenu background={menuBackground} color={menuTextColor}>
        <Container>
          <HeaderMenuList>
            {menuItems && menuItems.map((menu: IMenuItem) => <a href={menu.link}>{menu.title}</a>)}
          </HeaderMenuList>
        </Container>
      </HeaderMenu>
    </HeaderStyled>
  );
};

export default Header;
