import { SpaceProps } from 'styled-system';

export interface IDivider extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}
