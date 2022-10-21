import { TooltipProps } from 'rc-tooltip/lib/Tooltip';

export type TPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom';

export interface ITooltip extends TooltipProps {
  teid?: string;
  placement?: TPlacement;
  color?: 'dark' | 'light';
  size?: number;
}
