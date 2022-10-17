import styled from '@emotion/styled';
import { space } from 'styled-system';
import Color from '../../../themes/Color';
import { IPreview } from './Preview.types';

export const PreviewStyled = styled.div<IPreview>(
  ({ boxHeight, boxWidth }) => ({
    backgroundColor: Color.slate[100],
    border: `1px solid ${Color.slate[200]}`,
    width: boxWidth,
    height: boxHeight,
    position: 'relative',
    padding: 8,
  }),
  space,
);

export const IconWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  svg: {
    width: '100%',
    height: '100%',
  },
});

export const Clear = styled.div({
  position: 'absolute',
  top: 8,
  right: 8,
});
