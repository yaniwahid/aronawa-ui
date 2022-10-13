import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color, space } from 'styled-system';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';

export const DropdownStyled = css`
  .aronawa-dropdown {
    position: absolute;
    left: -9999px;
    top: -9999px;
    z-index: 1070;
    display: block;
    font-size: 14px;
    line-height: 1.5;
    padding: 8px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
  }
  .aronawa-dropdown-hidden {
    display: none;
  }
  .aronawa-dropdown-slide-up-enter,
  .aronawa-dropdown-slide-up-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    display: block !important;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }
  .aronawa-dropdown-slide-up-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    display: block !important;
    opacity: 1;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }
  .aronawa-dropdown-slide-up-enter.aronawa-dropdown-slide-up-enter-active.aronawa-dropdown-placement-bottomLeft,
  .aronawa-dropdown-slide-up-appear.aronawa-dropdown-slide-up-appear-active.aronawa-dropdown-placement-bottomLeft,
  .aronawa-dropdown-slide-up-enter.aronawa-dropdown-slide-up-enter-active.aronawa-dropdown-placement-bottomCenter,
  .aronawa-dropdown-slide-up-appear.aronawa-dropdown-slide-up-appear-active.aronawa-dropdown-placement-bottomCenter,
  .aronawa-dropdown-slide-up-enter.aronawa-dropdown-slide-up-enter-active.aronawa-dropdown-placement-bottomRight,
  .aronawa-dropdown-slide-up-appear.aronawa-dropdown-slide-up-appear-active.aronawa-dropdown-placement-bottomRight {
    animation-name: aronawaDropdownSlideUpIn;
    animation-play-state: running;
  }
  .aronawa-dropdown-slide-up-enter.aronawa-dropdown-slide-up-enter-active.aronawa-dropdown-placement-topLeft,
  .aronawa-dropdown-slide-up-appear.aronawa-dropdown-slide-up-appear-active.aronawa-dropdown-placement-topLeft,
  .aronawa-dropdown-slide-up-enter.aronawa-dropdown-slide-up-enter-active.aronawa-dropdown-placement-topCenter,
  .aronawa-dropdown-slide-up-appear.aronawa-dropdown-slide-up-appear-active.aronawa-dropdown-placement-topCenter,
  .aronawa-dropdown-slide-up-enter.aronawa-dropdown-slide-up-enter-active.aronawa-dropdown-placement-topRight,
  .aronawa-dropdown-slide-up-appear.aronawa-dropdown-slide-up-appear-active.aronawa-dropdown-placement-topRight {
    animation-name: aronawaDropdownSlideDownIn;
    animation-play-state: running;
  }
  .aronawa-dropdown-slide-up-leave.aronawa-dropdown-slide-up-leave-active.aronawa-dropdown-placement-bottomLeft,
  .aronawa-dropdown-slide-up-leave.aronawa-dropdown-slide-up-leave-active.aronawa-dropdown-placement-bottomCenter,
  .aronawa-dropdown-slide-up-leave.aronawa-dropdown-slide-up-leave-active.aronawa-dropdown-placement-bottomRight {
    animation-name: aronawaDropdownSlideUpOut;
    animation-play-state: running;
  }
  .aronawa-dropdown-slide-up-leave.aronawa-dropdown-slide-up-leave-active.aronawa-dropdown-placement-topLeft,
  .aronawa-dropdown-slide-up-leave.aronawa-dropdown-slide-up-leave-active.aronawa-dropdown-placement-topCenter,
  .aronawa-dropdown-slide-up-leave.aronawa-dropdown-slide-up-leave-active.aronawa-dropdown-placement-topRight {
    animation-name: aronawaDropdownSlideDownOut;
    animation-play-state: running;
  }
  @keyframes aronawaDropdownSlideUpIn {
    0% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
  }
  @keyframes aronawaDropdownSlideUpOut {
    0% {
      opacity: 1;
      transform-origin: 0% 0%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 0%;
      transform: scaleY(0);
    }
  }
  @keyframes aronawaDropdownSlideDownIn {
    0% {
      opacity: 0;
      transform-origin: 0% 100%;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform-origin: 0% 100%;
      transform: scaleY(1);
    }
  }
  @keyframes aronawaDropdownSlideDownOut {
    0% {
      opacity: 1;
      transform-origin: 0% 100%;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform-origin: 0% 100%;
      transform: scaleY(0);
    }
  }
  .aronawa-dropdown-arrow {
    position: absolute;
    border-width: 4px;
    border-color: transparent;
    box-shadow: 0 1px 5px #ccc;
    border-style: solid;
    transform: rotate(45deg);
  }
  .aronawa-dropdown-show-arrow.aronawa-dropdown-placement-top,
  .aronawa-dropdown-show-arrow.aronawa-dropdown-placement-topLeft,
  .aronawa-dropdown-show-arrow.aronawa-dropdown-placement-topRight {
    padding-bottom: 6px;
  }
  .aronawa-dropdown-show-arrow.aronawa-dropdown-placement-bottom,
  .aronawa-dropdown-show-arrow.aronawa-dropdown-placement-bottomLeft,
  .aronawa-dropdown-show-arrow.aronawa-dropdown-placement-bottomRight {
    padding-top: 6px;
  }
  .aronawa-dropdown-placement-top .aronawa-dropdown-arrow,
  .aronawa-dropdown-placement-topLeft .aronawa-dropdown-arrow,
  .aronawa-dropdown-placement-topRight .aronawa-dropdown-arrow {
    bottom: 4px;
    border-top-color: white;
  }
  .aronawa-dropdown-placement-top .aronawa-dropdown-arrow {
    left: 50%;
  }
  .aronawa-dropdown-placement-topLeft .aronawa-dropdown-arrow {
    left: 15%;
  }
  .aronawa-dropdown-placement-topRight .aronawa-dropdown-arrow {
    right: 15%;
  }
  .aronawa-dropdown-placement-bottom .aronawa-dropdown-arrow,
  .aronawa-dropdown-placement-bottomLeft .aronawa-dropdown-arrow,
  .aronawa-dropdown-placement-bottomRight .aronawa-dropdown-arrow {
    top: 4px;
    border-bottom-color: white;
  }
  .aronawa-dropdown-placement-bottom .aronawa-dropdown-arrow {
    left: 50%;
  }
  .aronawa-dropdown-placement-bottomLeft .aronawa-dropdown-arrow {
    left: 15%;
  }
  .aronawa-dropdown-placement-bottomRight .aronawa-dropdown-arrow {
    right: 15%;
  }
`;

export const DropdownMenuStyled = styled.div({
  position: 'relative',
  minWidth: 240,
});

export const DropdownItemStyled = styled.div(
  {
    position: 'relative',
    cursor: 'pointer',
    fontSize: 14,
    lineHeight: '26px',
    padding: '4px 8px',
    display: 'flex',
    borderRadius: Radius.blunt,
    '&:hover': {
      background: Color.slate[50],
    },
  },
  space,
  color,
);
