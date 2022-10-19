import { css } from '@emotion/react';

export const ModalStyled = css`
  .aronawa-modal {
    position: relative;
    width: auto;
    margin: 16px;

    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',
  }
  .aronawa-modal-wrap {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }
  .aronawa-modal-title {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',
  }
  .aronawa-modal-content {
    position: relative;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    background-clip: padding-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06), 0px 8px 12px rgba(0, 0, 0, 0.16);
  }
  .aronawa-modal-close {
    cursor: pointer;
    border: 0;
    background: transparent;
    position: absolute;
    right: 16px;
    top: 16px;
    line-height: 1;
    text-decoration: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin: 0;
  }
  .aronawa-modal-close i {
    color: #7c8187;
  }
  .aronawa-modal-close:hover {
    text-decoration: none;
  }
  .aronawa-modal-close:hover i {
    color: #121212;
  }
  .aronawa-modal-header {
    padding: 16px;
    border-radius: 5px 5px 0 0;
    background: #fff;
    padding-right: 48px;
  }
  .aronawa-modal-default .aronawa-modal-header {
    border-bottom: 1px solid #e3e5e8;
  }
  .aronawa-modal-default .aronawa-modal-footer {
    border-top: 1px solid #e3e5e8;
  }
  .aronawa-modal-default .aronawa-modal-body {
    padding: 16px;
  }
  .aronawa-modal-body {
    padding: 0 16px;
    overflow: auto;
    max-height: calc(100vh - 56px - 64px - 32px);
  }
  .aronawa-modal-no-title .aronawa-modal-body {
    padding-top: 16px;
    max-height: calc(100vh - 64px - 32px);
  }
  .aronawa-modal-no-footer .aronawa-modal-body {
    padding-bottom: 16px;
    max-height: calc(100vh - 56px - 32px);
  }
  .aronawa-modal-no-title.aronawa-modal-no-footer .aronawa-modal-body {
    padding-bottom: 16px;
    padding-top: 16px;
    max-height: calc(100vh - 32px);
  }
  .aronawa-modal-footer {
    padding: 16px;
    text-align: right;
    border-radius: 0 0 5px 5px;
  }
  .aronawa-modal-zoom-enter,
  .aronawa-modal-zoom-appear {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }
  .aronawa-modal-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }
  .aronawa-modal-zoom-enter.aronawa-modal-zoom-enter-active,
  .aronawa-modal-zoom-appear.aronawa-modal-zoom-appear-active {
    animation-name: aronawaModalZoomIn;
    animation-play-state: running;
  }
  .aronawa-modal-zoom-leave.aronawa-modal-zoom-leave-active {
    animation-name: aronawaModalZoomOut;
    animation-play-state: running;
  }
  @keyframes aronawaModalZoomIn {
    0% {
      opacity: 0;
      transform: scale(0, 0);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
  @keyframes aronawaModalZoomOut {
    0% {
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform: scale(0, 0);
    }
  }
  @media (min-width: 768px) {
    .aronawa-modal {
      margin: 64px auto;
    }
    .aronawa-modal-sm {
      width: 360px;
    }
    .aronawa-modal-md {
      width: 494px;
    }
    .aronawa-modal-lg {
      width: 600px;
    }

    .aronawa-modal-body {
      max-height: calc(100vh - 56px - 64px - 128px);
    }
    .aronawa-modal-no-title .aronawa-modal-body {
      padding-top: 16px;
      max-height: calc(100vh - 128px - 128px);
    }
    .aronawa-modal-no-footer .aronawa-modal-body {
      padding-bottom: 16px;
      max-height: calc(100vh - 56px - 128px);
    }
    .aronawa-modal-no-title.aronawa-modal-no-footer .aronawa-modal-body {
      padding-bottom: 16px;
      padding-top: 16px;
      max-height: calc(100vh - 128px);
    }
  }
  .aronawa-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(165, 170, 176, 0.48);
    height: 100%;
    z-index: 1050;
  }
  .aronawa-modal-mask-hidden {
    display: none;
  }
  .aronawa-modal-fade-enter,
  .aronawa-modal-fade-appear {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }
  .aronawa-modal-fade-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }
  .aronawa-modal-fade-enter.aronawa-modal-fade-enter-active,
  .aronawa-modal-fade-appear.aronawa-modal-fade-appear-active {
    animation-name: aronawaModalFadeIn;
    animation-play-state: running;
  }
  .aronawa-modal-fade-leave.aronawa-modal-fade-leave-active {
    animation-name: aronawaModalFadeOut;
    animation-play-state: running;
  }
  @keyframes aronawaModalFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes aronawaModalFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
