import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import { IDivider } from './Divider.types';

export const DividerStyled = styled.div<IDivider>(({ color, my, mx }) => ({
  backgroundColor: color ? color : Color.slate[300],
  height: 1,
  display: 'flex',
  clear: 'both',
  width: '100%',
  minWidth: '100%',
  ...(my && {
    marginTop: my,
    marginBottom: my,
  }),
  ...(mx && {
    marginTop: mx,
    marginBottom: mx,
  }),
}));
