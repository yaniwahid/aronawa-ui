import styled from '@emotion/styled';
import Radius from '../../../themes/Radius';

export const NavbarStyled = styled.div({
  backgroundColor: '#104D97',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '99',
  height: '56px',
  position: 'fixed',
});

export const NavbarContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 32,
  paddingRight: 32,
  height: '100%',
});

export const NavbarLogo = styled.div({
  display: 'flex',
  img: {
    height: 24,
  },
});

export const NavbarMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& > * + *': {
    marginLeft: 24,
  },
});

export const UserMenu = styled.div({
  cursor: 'pointer',
  img: {
    width: 32,
    height: 32,
    borderRadius: Radius.circle,
  },
});
