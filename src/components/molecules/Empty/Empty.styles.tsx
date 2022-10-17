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
      width: 64,
      marginBottom: 16,
    },
    h4: {
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 0,
    },
    p: {
      fontSize: 12,
      marginTop: 8,
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
