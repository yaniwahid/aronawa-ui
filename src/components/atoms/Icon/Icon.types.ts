import { SpaceProps } from "styled-system";

export interface IIcon extends SpaceProps, React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  size?: number;
  color?: string;
}
