import styled from '@emotion/styled';
import Color from '../../../themes/Color';

export const ErrorStyled = styled.div({
  minHeight: '100vh',
  padding: '64px 16px',
  position: 'relative',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 1440,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (min-width: 992px)': {
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-between',
    alignItems: 'center',
    placeItems: 'center',
    display: 'grid',
    gap: 32,
  },
  '@media (min-width: 1200px)': {
    maxWidth: 1200,
  },
  '@media (min-width: 1441px)': {
    maxWidth: 1440,
  },
});

export const Content = styled.div({
  textAlign: 'center',
  marginTop: 32,
  h1: {
    fontSize: 24,
    fontFamily: 'geomanistmedium,sans-serif',
  },
  small: {
    color: Color.font.pencil,
    fontWeight: 700,
    letterSpacing: '0.2px',
    textTransform: 'uppercase',
  },
  p: {
    marginTop: 24,
    marginBottom: 32,
  },
  '@media (min-width: 992px)': {
    textAlign: 'left',
    order: 1,
    marginTop: 0,
    h1: {
      fontSize: 32,
    },
    small: {
      fontSize: 14,
    },
    p: {
      fontSize: 16,
    },
  },
});
export const Image = styled.div({
  display: 'flex',
  justifyContent: 'center',
  img: {
    maxWidth: '100%',
  },
  '@media (min-width: 992px)': {
    justifyContent: 'flex-end',
    order: 2,
  },
});
