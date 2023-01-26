import styled from '@emotion/styled';
import Color from '../../../themes/Color';

interface IStyle {
  hasSideMenu?: boolean;
}

export const LayoutStyled = styled.div({
  paddingTop: 56,
  backgroundColor: Color.slate[50],
});

export const ContentStyled = styled.div<IStyle>(({ hasSideMenu }) => ({
  display: 'flex',
  flex: 'auto',
  transition: 'all .2s',
  overflowX: 'hidden',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 56px)',
  padding: '24px 32px',
  ...(hasSideMenu && {
    marginLeft: 240,
  }),
}));
