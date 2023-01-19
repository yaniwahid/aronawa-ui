import styled from '@emotion/styled';

import Color from '../../../themes/Color';
import { IPreview } from './Preview.types';

export const PreviewStyled = styled.div<IPreview>(({ boxHeight, boxWidth, isInvalid }) => ({
  backgroundColor: Color.slate[100],
  border: `1px solid ${isInvalid ? Color.danger.default : Color.slate[300]}`,
  width: boxWidth,
  height: boxHeight,
  position: 'relative',
  padding: 8,
  '&::before': {
    height: 0,
    content: '""',
    display: 'block',
    paddingBottom: '100%',
  },
  '& > *:not(style)': {
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  '& > img, & > video': {
    objectFit: 'cover',
  },
}));

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
