import styled from '@emotion/styled';
import Color from '../../../themes/Color';

export const BreadcrumbStyled = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  '& > * + *': {
    marginLeft: 8,
  },
});

export const BreadcrumbItemStyled = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
  '&:not(:first-of-type):before': {
    fontFamily: 'ikaicons',
    content: '"\\e919"',
    marginRight: 8,
    color: Color.font.pencil,
  },
  i: {
    marginRight: 8,
    display: 'inline-block',
  },
  a: {
    textDecoration: 'none',
    color: Color.sky[500],
  },
});
