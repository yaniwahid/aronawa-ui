import styled from '@emotion/styled';
import { space } from 'styled-system';
import Color from '../../../themes/Color';

export const BreadcrumbStyled = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    '& > * + *': {
      marginLeft: 8,
    },
  },
  space,
);

export const BreadcrumbItemStyled = styled.div({
  display: 'flex',
  alignItems: 'center',
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
