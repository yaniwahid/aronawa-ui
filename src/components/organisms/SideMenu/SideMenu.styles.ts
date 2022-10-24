import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { ISideMenuItem } from './SideMenu.types';

export const SideMenuStyled = styled.aside({
  backgroundColor: Color.light,
  boxShadow: 'inset -1px 0px 0px #D7DADE',
  height: 'calc(100vh - 56px)',
  fontSize: 14,
  overflow: 'auto',
  position: 'fixed',
  left: 0,
  top: 56,
  flex: '0 0 240px',
  maxWidth: '240px',
  minWidth: '240px',
  width: '240px',
  padding: '16px 8px',
  display: 'flex',
  zIndex: 9,
  flexDirection: 'column',
  '@media (max-width: 991.98px)': {
    transform: 'translateX(-100%)',
    transition:
      'transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1) 0s, height 0s ease 0.3s, width 0s ease 0.3s, box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1) 0s, -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1) 0s, -webkit-box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1) 0s',
    height: 'calc(100vh - 88px)',
  },
});

export const Item = styled.div<ISideMenuItem>(({ isActive }) => ({
  position: 'relative',
  '& > a': {
    padding: '0 8px',
    height: 40,
    backgroundColor: isActive ? '#1984FB' : undefined,
    color: isActive ? Color.light : Color.font.ink,
    display: 'flex',
    alignItems: 'center',
    borderRadius: Radius.blunt,
    textDecoration: 'none',
    '&:hover': {
      color: isActive ? Color.light : Color.sky[500],
    },
    i: {
      display: 'flex',
    },
  },
  '& + div': {
    marginTop: 8,
  },
}));

export const TextItem = styled.span({
  display: 'inline-block',
  paddingLeft: 12,
  fontWeight: 600,
  '& *': {
    marginLeft: 8,
  },
});

export const Parent = styled.div({
  marginTop: '24px !important',
  h5: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: Color.font.pencil,
    marginBottom: 8,
    marginTop: 0,
  },
});

export const ItemSub = styled.div({
  display: 'flex',
  alignItems: 'center',
  color: Color.font.ink,
});

export const ItemSubWrapper = styled.div({
  '& > div': {
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: 0,
    '& > div': {
      border: 0,
    },
  },
  a: {
    marginLeft: -16,
    paddingLeft: '24px !important',
  },
  '& .collapse-title': {
    padding: '0 8px !important',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      '& span, & i': {
        color: Color.sky[500],
      },
    },
    i: {
      color: Color.font.ink,
    },
  },
  '& .collapse-body': {
    marginTop: 8,
    padding: '0 0 0 20px',
  },
});
