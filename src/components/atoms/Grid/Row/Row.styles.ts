import styled from '@emotion/styled';
import { IRow } from '../Grid.types';

export const RowStyled = styled.div<IRow>(
  {
    display: 'flex',
    flexWrap: 'wrap',
  },
  ({ noGutter, gutter }) => {
    let cssTmp: object = {};

    if (noGutter) {
      cssTmp = {
        marginLeft: '0 !important',
        marginRight: '0 !important',
        '& > .col': {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        },
      };
    }
    if (gutter) {
      cssTmp = {
        marginLeft: -gutter / 2,
        marginRight: -gutter / 2,
        '& > .col': {
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2,
        },
      };
    }

    return { ...cssTmp };
  },
);
