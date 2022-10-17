import styled from '@emotion/styled';
import { space } from 'styled-system';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IBadge } from './Badge.types';

const Colors = Color as any;

const Solid = (color: any) => {
  return {
    backgroundColor: Colors[color]['contrast'],
  };
};

const Subtle = (color: any) => {
  return {
    backgroundColor: Colors[color]['subtle'],
    color: Colors[color]['text'],
  };
};

const Ghost = (color: any) => {
  const styleProps: any = {
    neutral: {
      color: Color.font.ink,
    },
  };
  return {
    color: Colors[color]['default'],
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.2px',
    ...styleProps[color],
  };
};

export const BadgeStyled = styled.span<IBadge>(({ variant, color }) => {
  let cssTmp: object = {
    height: 24,
    minWidth: 24,
    padding: '0 8px',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '24px',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    display: 'inline-flex',
    borderRadius: 25,
  };
  if (variant === 'subtle') {
    cssTmp = {
      ...cssTmp,
      ...Subtle(color),
    };
  } else if (variant === 'indicator') {
    cssTmp = {
      ...cssTmp,
      backgroundColor: Color.light,
      color: Color.font.pencil,
      border: `1px solid ${Color.slate[200]}`,
    };
  } else if (variant === 'ghost') {
    cssTmp = {
      ...cssTmp,
      ...Ghost(color),
    };
  } else {
    cssTmp = {
      ...cssTmp,
      ...Solid(color),
      color: Color.light,
    };
  }
  return { ...cssTmp };
}, space);

export const IndicatorStyled = styled.span<IBadge>(({ color }) => ({
  position: 'relative',
  display: 'inline-block',
  width: 6,
  height: 6,
  verticalAlign: 'middle',
  borderRadius: Radius.circle,
  marginRight: 4,
  ...Solid(color),
}));

export const Close = styled.span({
  marginLeft: 4,
  cursor: 'pointer',
  display: 'inline-flex',
});
