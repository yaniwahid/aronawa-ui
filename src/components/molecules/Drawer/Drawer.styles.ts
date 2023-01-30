import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IDrawer } from './Drawer.types';

export const DrawerStyled = css`
  .aronawa-drawer {
    position: fixed;
    z-index: 9997;
    pointer-events: none;
    inset: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .aronawa-drawer-inline {
    position: absolute;
  }
  .aronawa-drawer-mask {
    position: absolute;
    z-index: 9997;
    background-color: rgba(165, 170, 176, 0.48);
    pointer-events: auto;
    inset: 0;
  }
  .aronawa-drawer-content-wrapper {
    position: absolute;
    z-index: 9997;
    overflow: hidden;
    transition: transform 0.3s;
    background-color: #fff;
  }
  .aronawa-drawer-content-wrapper-hidden {
    display: none;
  }
  .aronawa-drawer-left .aronawa-drawer-content-wrapper {
    top: 0;
    bottom: 0;
    left: 0;
    max-width: calc(100vw - 56px);
  }
  .aronawa-drawer-right .aronawa-drawer-content-wrapper {
    top: 0;
    right: 0;
    bottom: 0;
    max-width: calc(100vw - 56px);
  }
  .aronawa-drawer-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    pointer-events: auto;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06), 0px 8px 12px rgba(0, 0, 0, 0.16);
  }
  .mask-motion-enter-active,
  .mask-motion-appear-active,
  .mask-motion-leave-active {
    transition: all 0.3s;
  }
  .mask-motion-enter,
  .mask-motion-appear {
    opacity: 0;
  }
  .mask-motion-enter-active,
  .mask-motion-appear-active {
    opacity: 1;
  }
  .mask-motion-leave {
    opacity: 1;
  }
  .mask-motion-leave-active {
    opacity: 0;
  }
  .panel-motion-left-enter-start,
  .panel-motion-left-appear-start,
  .panel-motion-left-leave-start {
    transition: none !important;
  }
  .panel-motion-left-enter-active,
  .panel-motion-left-appear-active,
  .panel-motion-left-leave-active {
    transition: all 0.3s;
  }
  .panel-motion-left-enter,
  .panel-motion-left-appear {
    transform: translateX(-100%);
  }
  .panel-motion-left-enter-active,
  .panel-motion-left-appear-active {
    transform: translateX(0);
  }
  .panel-motion-left-leave {
    transform: translateX(0);
  }
  .panel-motion-left-leave-active {
    transform: translateX(-100%) !important;
  }
  .panel-motion-right-enter-start,
  .panel-motion-right-appear-start,
  .panel-motion-right-leave-start {
    transition: none !important;
  }
  .panel-motion-right-enter-active,
  .panel-motion-right-appear-active,
  .panel-motion-right-leave-active {
    transition: all 0.3s;
  }
  .panel-motion-right-enter,
  .panel-motion-right-appear {
    transform: translateX(100%);
  }
  .panel-motion-right-enter-active,
  .panel-motion-right-appear-active {
    transform: translateX(0);
  }
  .panel-motion-right-leave {
    transform: translateX(0);
  }
  .panel-motion-right-leave-active {
    transform: translateX(100%) !important;
  }
  .panel-motion-bottom-enter-start,
  .panel-motion-bottom-appear-start,
  .panel-motion-bottom-leave-start {
    transition: none !important;
  }
  .panel-motion-bottom-enter-active,
  .panel-motion-bottom-appear-active,
  .panel-motion-bottom-leave-active {
    transition: all 0.3s;
  }
  .panel-motion-bottom-enter,
  .panel-motion-bottom-appear {
    transform: translateY(100%);
  }
  .panel-motion-bottom-enter-active,
  .panel-motion-bottom-appear-active {
    transform: translateY(0);
  }
  .panel-motion-bottom-leave {
    transform: translateY(0);
  }
  .panel-motion-bottom-leave-active {
    transform: translateY(100%) !important;
  }
  .panel-motion-top-enter-start,
  .panel-motion-top-appear-start,
  .panel-motion-top-leave-start {
    transition: none !important;
  }
  .panel-motion-top-enter-active,
  .panel-motion-top-appear-active,
  .panel-motion-top-leave-active {
    transition: all 0.3s;
  }
  .panel-motion-top-enter,
  .panel-motion-top-appear {
    transform: translateY(-100%);
  }
  .panel-motion-top-enter-active,
  .panel-motion-top-appear-active {
    transform: translateY(0);
  }
  .panel-motion-top-leave {
    transform: translateY(0);
  }
  .panel-motion-top-leave-active {
    transform: translateY(-100%) !important;
  }
  .aronawa-drawer-no-title .aronawa-drawer-body {
    padding-top: 16px;
    max-height: calc(100% - 64px);
    height: calc(100% - 64px);
  }
  .aronawa-drawer-no-footer .aronawa-drawer-body {
    padding-bottom: 16px;
    max-height: calc(100% - 56px);
    height: calc(100% - 56px);
  }
  .aronawa-drawer-no-title.aronawa-drawer-no-footer .aronawa-drawer-body {
    padding-bottom: 16px;
    padding-top: 16px;
    max-height: 100%;
    height: 100%;
  }
  .aronawa-drawer-top,
  .aronawa-drawer-bottom {
    left: 0;
    width: 100%;
    height: 0%;
  }
  .aronawa-drawer-top .aronawa-drawer-content-wrapper,
  .aronawa-drawer-bottom .aronawa-drawer-content-wrapper {
    width: 100%;
  }
  .aronawa-drawer-top.aronawa-drawer-open,
  .aronawa-drawer-bottom.aronawa-drawer-open {
    height: 100%;
  }
  .aronawa-drawer-top.aronawa-drawer-open.no-mask,
  .aronawa-drawer-bottom.aronawa-drawer-open.no-mask {
    height: 0%;
  }
  .aronawa-drawer-top {
    top: 0;
  }
  .aronawa-drawer-bottom {
    bottom: 0;
  }
  .aronawa-drawer-bottom .aronawa-drawer-content-wrapper {
    bottom: 0;
  }
  .aronawa-drawer-bottom.aronawa-drawer-open.no-mask {
    bottom: 1px;
    transform: translateY(1px);
  }
`;

export const DrawerBody = styled.div({
  padding: '0 16px',
  overflow: 'auto',
  maxHeight: 'calc(100% - 56px - 64px)',
  height: 'calc(100% - 56px - 64px)',
});

export const DrawerHeaderStyled = styled.div<IDrawer>(({ isCloseLeft }) => ({
  padding: 16,
  paddingRight: 48,
  height: 56,
  img: {
    width: 24,
  },
  ...(isCloseLeft && {
    paddingRight: 16,
    paddingLeft: 48,
  }),
}));

export const Title = styled.div({
  margin: 0,
  fontSize: 16,
  fontWeight: 700,
  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
});

export const DrawerFooterStyled = styled.div({
  padding: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& > * + *': {
    marginLeft: 8,
  },
});

export const Close = styled.div<IDrawer>(({ isCloseLeft }) => ({
  cursor: 'pointer',
  background: 'transparent',
  position: 'absolute',
  right: 16,
  top: 16,
  lineHeight: 1,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  i: {
    color: '#7c8187',
  },
  '&:hover i': {
    color: '#121212',
  },
  ...(isCloseLeft && {
    right: 'auto',
    left: 16,
  }),
}));
