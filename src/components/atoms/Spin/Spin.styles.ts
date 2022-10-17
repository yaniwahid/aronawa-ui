import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface ISpin {
  isLoading?: boolean;
}

export const SpinStyled = styled.div({
  position: 'relative',
});

export const SpinWrapper = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9,
});

export const SpinContent = styled.div<ISpin>(({ isLoading }) => ({
  ...(isLoading && {
    opacity: '0.5',
    userSelect: 'none',
    pointerEvents: 'none',
    overflow: 'hidden',
  }),
}));

const loader = keyframes({
  from: {
    transform: 'translateY(-50%) rotate(0deg)',
  },
  to: {
    transform: 'translateY(-50%) rotate(360deg)',
  },
});

export const Loading = styled.span({
  position: 'relative',
  width: 32,
  span: {
    position: 'absolute',
    height: 32,
    width: 32,
    top: '50%',
    left: 0,
    backgroundColor: 'transparent',
    opacity: 1,
    borderRadius: '50%',
    borderTop: '3px solid currentColor',
    borderLeft: '3px solid currentColor',
    borderBottom: '3px solid currentColor',
    borderRight: '3px solid transparent',
    animationName: loader,
    animationDuration: '0.45s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});
