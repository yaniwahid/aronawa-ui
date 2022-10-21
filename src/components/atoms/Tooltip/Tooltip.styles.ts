import { css } from '@emotion/react';

export const TooltipStyled = css`
  .aronawa-tooltip.aronawa-tooltip-zoom-appear,
  .aronawa-tooltip.aronawa-tooltip-zoom-enter {
    opacity: 0;
  }
  .aronawa-tooltip.aronawa-tooltip-zoom-enter,
  .aronawa-tooltip.aronawa-tooltip-zoom-leave {
    display: block;
  }
  .aronawa-tooltip-zoom-enter,
  .aronawa-tooltip-zoom-appear {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    animation-play-state: paused;
  }
  .aronawa-tooltip-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
    animation-play-state: paused;
  }
  .aronawa-tooltip-zoom-enter.aronawa-tooltip-zoom-enter-active,
  .aronawa-tooltip-zoom-appear.aronawa-tooltip-zoom-appear-active {
    animation-name: aronawaToolTipZoomIn;
    animation-play-state: running;
  }
  .aronawa-tooltip-zoom-leave.aronawa-tooltip-zoom-leave-active {
    animation-name: aronawaToolTipZoomOut;
    animation-play-state: running;
  }
  @keyframes aronawaToolTipZoomIn {
    0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }
    100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }
  }
  @keyframes aronawaToolTipZoomOut {
    0% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }
  }
  .aronawa-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.9;
  }
  .aronawa-tooltip-hidden {
    display: none;
  }
  .aronawa-tooltip-placement-top,
  .aronawa-tooltip-placement-topLeft,
  .aronawa-tooltip-placement-topRight {
    padding: 5px 0 9px 0;
  }
  .aronawa-tooltip-placement-right,
  .aronawa-tooltip-placement-rightTop,
  .aronawa-tooltip-placement-rightBottom {
    padding: 0 5px 0 9px;
  }
  .aronawa-tooltip-placement-bottom,
  .aronawa-tooltip-placement-bottomLeft,
  .aronawa-tooltip-placement-bottomRight {
    padding: 9px 0 5px 0;
  }
  .aronawa-tooltip-placement-left,
  .aronawa-tooltip-placement-leftTop,
  .aronawa-tooltip-placement-leftBottom {
    padding: 0 9px 0 5px;
  }
  .aronawa-tooltip-inner {
    padding: 8px 16px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    background-color: #121212;
    border-radius: 5px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .aronawa-tooltip-light .aronawa-tooltip-inner {
    background-color: #fff;
    color: #121212;
  }
  .aronawa-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .aronawa-tooltip-placement-top .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-topLeft .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-topRight .aronawa-tooltip-arrow {
    bottom: 4px;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #121212;
  }
  .aronawa-tooltip-light.aronawa-tooltip-placement-top .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-topLeft .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-topRight .aronawa-tooltip-arrow {
    border-top-color: #fff;
  }
  .aronawa-tooltip-placement-top .aronawa-tooltip-arrow {
    left: 50%;
  }
  .aronawa-tooltip-placement-topLeft .aronawa-tooltip-arrow {
    left: 15%;
  }
  .aronawa-tooltip-placement-topRight .aronawa-tooltip-arrow {
    right: 15%;
  }
  .aronawa-tooltip-placement-right .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-rightTop .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-rightBottom .aronawa-tooltip-arrow {
    left: 4px;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #121212;
  }
  .aronawa-tooltip-light.aronawa-tooltip-placement-right .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-rightTop .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-rightBottom .aronawa-tooltip-arrow {
    border-right-color: #fff;
  }
  .aronawa-tooltip-placement-right .aronawa-tooltip-arrow {
    top: 50%;
  }
  .aronawa-tooltip-placement-rightTop .aronawa-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .aronawa-tooltip-placement-rightBottom .aronawa-tooltip-arrow {
    bottom: 15%;
  }
  .aronawa-tooltip-placement-left .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-leftTop .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-leftBottom .aronawa-tooltip-arrow {
    right: 4px;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #121212;
  }
  .aronawa-tooltip-light.aronawa-tooltip-placement-left .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-leftTop .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-leftBottom .aronawa-tooltip-arrow {
    border-left-color: #fff;
  }
  .aronawa-tooltip-placement-left .aronawa-tooltip-arrow {
    top: 50%;
  }
  .aronawa-tooltip-placement-leftTop .aronawa-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .aronawa-tooltip-placement-leftBottom .aronawa-tooltip-arrow {
    bottom: 15%;
  }
  .aronawa-tooltip-placement-bottom .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-bottomLeft .aronawa-tooltip-arrow,
  .aronawa-tooltip-placement-bottomRight .aronawa-tooltip-arrow {
    top: 4px;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #121212;
  }
  .aronawa-tooltip-light.aronawa-tooltip-placement-bottom .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-bottomLeft .aronawa-tooltip-arrow,
  .aronawa-tooltip-light.aronawa-tooltip-placement-bottomRight .aronawa-tooltip-arrow {
    border-bottom-color: #fff;
  }
  .aronawa-tooltip-placement-bottom .aronawa-tooltip-arrow {
    left: 50%;
  }
  .aronawa-tooltip-placement-bottomLeft .aronawa-tooltip-arrow {
    left: 15%;
  }
  .aronawa-tooltip-placement-bottomRight .aronawa-tooltip-arrow {
    right: 15%;
  }
`;
