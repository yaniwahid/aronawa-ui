export interface IMenuItem {
  title?: string;
  link?: string;
}

export interface IHeader {
  logo?: string;
  logoLink?: string;
  headerBackground?: string;
  categoriesText?: string;
  categoriesTextColor?: string;
  categoriesIcon?: string;
  searchText?: string;
  searchTexColor?: string;
  searchBackground?: string;
  serachOutline?: string;
  searchIcon?: string;
  userIcon?: string;
  counterTextColor?: string;
  counterBackground?: string;
  counterOutline?: string;
  cartIcon?: string;
  menuTextColor?: string;
  menuBackground?: string;
  menuItems?: IMenuItem[];
  buttonLoginText?: string;
  buttonLoginTextColor?: string;
  buttonLoginBackground?: string;
  buttonRegisterText?: string;
  buttonRegisterTextColor?: string;
  buttonRegisterBackground?: string;
  mobileMenuIcon?: string;
  mobileLoginIcon?: string;



  textColor?: string;
  popoverBackground?: string;
  separatorLineColor?: string;
  hoverText?: string;
  hoverBackground?: string;
  myAccountIcon?: string;
  myAccountIconHover?: string;
  myAccountText?: string;
  transactionIcon?: string;
  transactionIconHover?: string;
  transactionText?: string;
  logoutIcon?: string;
  logoutIconHover?: string;
  logoutText?: string;
  mobileShopText?: string;
  mobileShopTextColor?: string;
  mobileAccountText?: string;
  mobileAccountTextColor?: string;
  mobileCategoriesIcon?: string;
  mobileCloseIcon?: string;
  mobileArrowIcon?: string;
}


export interface IStyle {
  background?: string;
  color?: string;
  outline?: string;
  hoverColor?: string;
  hoverBackground?: string;
}