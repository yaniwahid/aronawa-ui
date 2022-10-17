import { BorderProps, SpaceProps } from 'styled-system';

export interface ISkeleton extends SpaceProps, BorderProps, React.HTMLAttributes<HTMLDivElement> {
  width: number | string;
  height: number | string;
  color?: string;
}
