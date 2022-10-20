import { FC, ReactElement } from 'react';

interface IRenderIf {
  children: ReactElement;
  isTrue: boolean;
}

const RenderIf: FC<IRenderIf> = ({ children, isTrue }) => (isTrue ? children : null);

export default RenderIf;
