import styled from '@emotion/styled';
import { Color } from '../../tokens';

export const EmptyStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  color: Color.font.ink,
  textAlign: 'center',
  padding: '64px 16px',
  img: {
    width: 64,
    marginBottom: 16,
  },
  h4: {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 0,
  },
  p: {
    fontSize: 12,
  },
});

export const ChildStyled = styled.div({
  marginTop: 16,
  button: {
    '& + button': {
      marginLeft: 8,
    },
  },
});

export const TitleStyled = styled.div({
  fontWeight: 700,
});
