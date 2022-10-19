import styled from '@emotion/styled';
import { layout, space } from 'styled-system';
import Color from '../../../themes/Color';

export const EmptyStyled = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: Color.font.ink,
    textAlign: 'center',
    padding: '64px 16px',
    margin: '0 auto',
    img: {
      width: 80,
      marginBottom: 16,
    },
    h4: {
      fontWeight: 600,
      fontSize: 24,
      marginBottom: 0,
      fontFamily: 'geomanistbook,sans-serif',
    },
    p: {
      fontSize: 14,
    },
  },
  space,
  layout,
);

export const ChildStyled = styled.div({
  marginTop: 16,
});

export const TitleStyled = styled.div({
  fontWeight: 700,
});
