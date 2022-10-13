import { css } from '@emotion/react';

export const ToastStyled = css`
  .Toastify__toast-container {
    z-index: 9999;
    -webkit-transform: translateZ(999);
    position: fixed;
    padding: 4px;
    box-sizing: border-box;
    color: #fff;
  }
  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
  }
  .Toastify__toast {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    color: #112211;
    border-radius: 5px;
    padding: 16px 24px;
    min-height: 0%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    border: 1px solid transparent;
    box-sizing: border-box;
    margin-bottom: 1rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;
    direction: ltr;
    z-index: 0;
    min-width: 360px;
  }
  .Toastify__toast--rtl {
    direction: rtl;
  }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .Toastify__toast-body > div:last-child {
    -ms-flex: 1;
    flex: 1;
  }
  .Toastify__toast-icon {
    -webkit-margin-end: 10px;
    margin-inline-end: 10px;
    width: 20px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -ms-flexbox;
    display: flex;
  }

  .Toastify--animate {
    animation-fill-mode: both;
    animation-duration: 0.7s;
  }

  .Toastify--animate-icon {
    animation-fill-mode: both;
    animation-duration: 0.3s;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 0;
      border-radius: 0;
    }
  }
  .Toastify__close-button {
    color: #fff;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .Toastify__close-button--light {
    color: #000;
    opacity: 0.3;
  }
  .Toastify__close-button > svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    opacity: 1;
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  @keyframes Toastify__slideInRight {
    from {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .Toastify__slide-enter--top-right,
  .Toastify__slide-enter--bottom-right {
    animation-name: Toastify__slideInRight;
  }

  .Toastify .Toastify__toast.Toastify__toast--success {
    background-color: #484c52;
    border-color: #484c52;
  }
  .Toastify .Toastify__toast.Toastify__toast--error {
    background-color: #484c52;
    border-color: #484c52;
  }
  .Toastify .Toastify__toast.Toastify__toast--success h5 {
    color: #fff;
    text-transform: uppercase;
  }
  .Toastify .Toastify__toast.Toastify__toast--error h5 {
    color: #fff;
  }
  .Toastify .Toastify__toast h5 {
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 4px;
    margin-top: 0;
  }
  .Toastify .Toastify__toast-body p {
    font-size: 14px;
    color: #fff;
  }
  .Toastify .Toastify__close-button {
    color: #7c8187;
    opacity: 1;
  }
  .Toastify .Toastify__close-button--default {
    color: #fff;
    opacity: 1;
  }
  .Toastify .Toastify__close-button > svg {
    width: 14px;
    height: 14px;
  }
  .Toastify__toast-body {
    color: #fff;
  }

  @media (max-width: 767.98px) {
    .Toastify .Toastify__toast-container {
      width: calc(100% - 16px);
      min-width: calc(100% - 16px);
      left: 8px;
      right: 8px;
      bottom: 8px;
      top: auto;
    }
    .Toastify .Toastify__toast {
      padding: 16px;
    }
  }
`;
