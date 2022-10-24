import styled from '@emotion/styled';
import Color from '../../../themes/Color';

export const EmptyStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  color: Color.font.ink,
  textAlign: 'center',
  padding: '64px 16px',
  margin: '0 auto',
  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
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
    marginTop: 8,
  },
});

export const ChildStyled = styled.div({
  marginTop: 16,
});

export const TitleStyled = styled.div({
  fontWeight: 700,
});
