import styled from '@emotion/styled';
import Breakpoints from '../../../../themes/Breakpoints';
import { ICol } from '../Grid.types';

const GRID_COLUMN: number = 12;
const percentage = (number: number) => number * 100;

export const ColStyled = styled.div<ICol>(({ sm, md, lg, xl, offset }) => {
  let cssTmp: object = {
    position: 'relative',
    width: '100%',
  };

  if (!sm && !md && !lg && !xl) {
    cssTmp = {
      ...cssTmp,
      flexBasis: 0,
      flexGrow: 1,
    };
  }

  if (offset) {
    const num = offset / GRID_COLUMN;
    cssTmp = {
      ...cssTmp,
      marginLeft: num === 0 ? 0 : `${percentage(num)}%`,
    };
  }

  if (sm) {
    cssTmp = {
      ...cssTmp,
      [Breakpoints.smMin]: {
        flex: `0 0 ${percentage(sm / GRID_COLUMN)}%`,
        maxWidth: `${percentage(sm / GRID_COLUMN)}%`,
      },
    };
  }

  if (md) {
    cssTmp = {
      ...cssTmp,
      [Breakpoints.mdMin]: {
        flex: `0 0 ${percentage(md / GRID_COLUMN)}%`,
        maxWidth: `${percentage(md / GRID_COLUMN)}%`,
      },
    };
  }

  if (lg) {
    cssTmp = {
      ...cssTmp,
      [Breakpoints.lgMin]: {
        flex: `0 0 ${percentage(lg / GRID_COLUMN)}%`,
        maxWidth: `${percentage(lg / GRID_COLUMN)}%`,
      },
    };
  }

  if (xl) {
    cssTmp = {
      ...cssTmp,
      [Breakpoints.xlMin]: {
        flex: `0 0 ${percentage(xl / GRID_COLUMN)}%`,
        maxWidth: `${percentage(xl / GRID_COLUMN)}%`,
      },
    };
  }

  return { ...cssTmp };
});
