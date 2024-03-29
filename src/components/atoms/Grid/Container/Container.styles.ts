import styled from '@emotion/styled';
import Breakpoints from '../../../../themes/Breakpoints';
import { IContainer } from '../Grid.types';

export const ContainerStyled = styled.div<IContainer>(({ gutter, noPadding, isFullWidth }) => {
  let cssTmp: object = {};
  if (!isFullWidth) {
    cssTmp = {
      ...cssTmp,
      [`${Breakpoints.mdMin}`]: {
        maxWidth: '720px',
      },
      [`${Breakpoints.lgMin}`]: {
        maxWidth: '960px',
      },
      [`${Breakpoints.xlMin}`]: {
        maxWidth: '1200px',
      },
      [`${Breakpoints.xxlMin}`]: {
        maxWidth: '1440px',
      },
    };
  }
  cssTmp = {
    ...cssTmp,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: !noPadding && gutter ? gutter / 2 : 0,
    paddingRight: !noPadding && gutter ? gutter / 2 : 0,
    width: '100%',
    '& > .row': {
      marginLeft: gutter ? -gutter / 2 : 0,
      marginRight: gutter ? -gutter / 2 : 0,
      '& > .col': {
        paddingLeft: gutter ? gutter / 2 : 0,
        paddingRight: gutter ? gutter / 2 : 0,
      },
    },
  };
  return { ...cssTmp };
});
