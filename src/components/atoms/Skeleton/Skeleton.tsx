import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import Color from '../../../themes/Color';
import { ISkeleton } from './Skeleton.types';

const loader = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const Skeleton = styled.div<ISkeleton>(({ width, height, color = Color.slate[100] }) => ({
  width,
  height,
  background: `linear-gradient(90deg, ${color} 25%, ${Color.slate[50]} 37%, ${color} 63%)`,
  animation: `${loader} 1.4s ease infinite`,
  backgroundSize: '400% 100%',
}));

export default Skeleton;
