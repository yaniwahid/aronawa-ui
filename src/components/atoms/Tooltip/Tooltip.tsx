import { Global } from '@emotion/react';
import { default as TooltipComponent } from 'rc-tooltip';
import React, { FC } from 'react';
import { TooltipStyled } from './Tooltip.styles';
import { ITooltip } from './Tooltip.types';

const Tooltip: FC<ITooltip> = ({
  placement = 'top',
  color = 'dark',
  teid = 'tooltip',
  size,
  children,
  ...props
}) => {
  return (
    <>
      <Global styles={TooltipStyled} />
      <TooltipComponent
        placement={placement}
        data-testid={teid}
        prefixCls="aronawa-tooltip"
        overlayClassName={`aronawa-tooltip-${color}`}
        overlayStyle={{ fontSize: size }}
        {...props}
      >
        {children}
      </TooltipComponent>
    </>
  );
};

export default Tooltip;
