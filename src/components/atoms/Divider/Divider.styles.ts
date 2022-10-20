import styled from '@emotion/styled';
import { space } from 'styled-system';
import Color from '../../../themes/Color';
import { IDivider } from './Divider.types';

export const DividerStyled = styled.div<IDivider>(
  ({ color }) => ({
    backgroundColor: color ? color : Color.slate[300],
    height: 1,
    display: 'flex',
    clear: 'both',
    width: '100%',
    minWidth: '100%',
  }),
  space,
);
