import styled from '@emotion/styled';
import Color from '../../../themes/Color';

export const LayoutStyled = styled.div({
  paddingTop: 56,
  backgroundColor: Color.slate[50],
});

export const ContentStyled = styled.div({
  display: 'flex',
  flex: 'auto',
  transition: 'all .2s',
  overflowX: 'hidden',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 56px)',
  marginLeft: 240,
  padding: '24px 32px',
});
