import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IStyle } from './Steps.types';

export const mappingColorStatus = (isSelected: any, isDone: any, isFailed: any) => {
  if (isFailed) {
    return Color.danger.default;
  }
  if (isSelected) {
    return Color.primary.default;
  }
  if (isDone) {
    return Color.font.ink;
  }
  return Color.font.pencil;
};

export const mappingBorderStatus = (isSelected: any, isDone: any, isFailed: any) => {
  if (isFailed) {
    return Color.danger.default;
  }
  if (isSelected) {
    return Color.sky[300];
  }
  if (isDone) {
    return Color.primary.default;
  }
  return Color.slate[200];
};

export const mappingIconStatus = (isSelected: any, isFailed: any) => {
  if (isFailed) {
    return Color.danger.default;
  }
  if (isSelected) {
    return Color.primary.default;
  }
  return Color.light;
};

export const mappingCircleStatus = (isSelected: any, isDone: any, isFailed: any) => {
  if (isFailed) {
    return 'transparent';
  }
  if (isSelected) {
    return Color.primary.default;
  }
  if (isDone) {
    return Color.primary.default;
  }
  return Color.slate[200];
};

export const mappingBackgroundStatus = (isDone: any, isFailed: any) => {
  if (isFailed) {
    return 'transparent';
  }
  if (isDone) {
    return Color.primary.default;
  }
  return Color.light;
};

export const StepsStyled = styled.div({
  position: 'relative',
});

export const StepsList = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  '@media (max-width: 767.98px)': {
    maxWidth: '100%',
    overflow: 'auto hidden',
    whiteSpace: 'nowrap',
    flexWrap: 'revert',
  },
});

export const TitleWrapper = styled.div<IStyle>(({ isSelected, isDone, isFailed }) => ({
  flexBasis: 0,
  flexGrow: 1,
  minWidth: 0,
  maxWidth: '100%',
  position: 'relative',
  borderTop: `3px solid ${mappingBorderStatus(isSelected, isDone, isFailed)}`,
  '@media (max-width: 767.98px)': {
    flexBasis: 'revert',
    flexGrow: 'revert',
    minWidth: 'revert',
  },
}));

export const Title = styled.div<IStyle>(({ isSelected, isDone, isFailed }) => ({
  padding: '16px 8px 0 8px',
  color: mappingColorStatus(isSelected, isDone, isFailed),
  position: 'relative',
  display: 'flex',
}));

export const Content = styled.div({
  paddingTop: 24,
  paddingBottom: 24,
});

export const StepsItemStyled = styled.div({
  position: 'relative',
});

export const Circle = styled.div<IStyle>(({ isSelected, isDone, isFailed }) => ({
  position: 'relative',
  border: `2px solid ${mappingCircleStatus(isSelected, isDone, isFailed)}`,
  borderRadius: Radius.circle,
  backgroundColor: mappingBackgroundStatus(isDone, isFailed),
  width: 16,
  height: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  i: {
    color: mappingIconStatus(isSelected, isFailed),
  },
}));

export const TitleContent = styled.div({
  position: 'relative',
  marginLeft: 8,
  p: {
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: 12,
  },
  small: {
    display: 'block',
    fontSize: 14,
    marginTop: 4,
  },
});
