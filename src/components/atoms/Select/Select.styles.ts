import { css } from '@emotion/react';

export const SelectStyled = css`
  .aronawa-select {
    width: 100%;
    position: relative;
    cursor: pointer;
  }
  .aronawa-select-disabled,
  .aronawa-select-disabled input {
    cursor: not-allowed !important;
  }
  .aronawa-select-disabled .aronawa-select-selector {
    background: #e3e5e8 !important;
    cursor: not-allowed !important;
  }
  .aronawa-select-show-arrow.aronawa-select-loading .aronawa-select-arrow-icon::after {
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 2px solid #a5aab0;
    border-top-color: transparent;
    border-bottom-color: transparent;
    transform: none;
    margin-top: 4px;
    animation: aronawaSelectLoadingIcon 0.5s infinite;
  }
  .aronawa-select.aronawa-select-multiple .aronawa-select-selection-placeholder {
    position: absolute;
    top: 50%;
    right: 8px;
    left: 8px;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  .aronawa-select .aronawa-select-selection-placeholder {
    color: #a5aab0;
    pointer-events: none;
  }
  .aronawa-select .aronawa-select-selection-search-input {
    appearance: none;
  }
  .aronawa-select .aronawa-select-selection-search-input::-webkit-search-cancel-button {
    display: none;
    appearance: none;
  }
  .aronawa-select-single .aronawa-select-selector {
    display: flex;
    position: relative;
  }
  .aronawa-select-single .aronawa-select-selector .aronawa-select-selection-search {
    position: absolute;
    left: 8px;
    right: 32px;
  }
  .aronawa-select-single .aronawa-select-selector .aronawa-select-selection-search-input {
    width: 100%;
  }
  .aronawa-select-single .aronawa-select-selector .aronawa-select-selection-item,
  .aronawa-select-single .aronawa-select-selector .aronawa-select-selection-placeholder {
    padding: 0;
    line-height: 30px;
    transition: all 0.3s;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 24px;
    z-index: 1;
  }
  .aronawa-select-single:not(.aronawa-select-customize-input) .aronawa-select-selector {
    width: 100%;
    min-width: 0;
    outline: 2px solid transparent;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    font-size: 14px;
    padding: 0 8px;
    height: 32px;
    border-radius: 3px;
    border: 1px solid #a5aab0;
    background: #fff;
  }
  .aronawa-select-multiple .aronawa-select-selector {
    width: 100%;
    min-width: 0;
    outline: 2px solid transparent;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    font-size: 14px;
    padding: 0 8px;
    min-height: 32px;
    border-radius: 3px;
    border: 1px solid #a5aab0;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
  }
  .aronawa-select-single:not(.aronawa-select-customize-input)
    .aronawa-select-selector
    .aronawa-select-selection-search-input {
    width: 100%;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  .aronawa-select-single.aronawa-select-show-search:not(.aronawa-select-customize-input)
    .aronawa-select-selector
    .aronawa-select-selection-search-input {
    cursor: text;
  }
  .aronawa-select-multiple .aronawa-select-selector .aronawa-select-selection-item {
    position: relative;
    display: flex;
    flex: none;
    box-sizing: border-box;
    max-width: 100%;
    height: 22px;
    margin: 2px;
    line-height: 20px;
    background: #D7DADE;
    border-radius: 3px;
    cursor: default;
    transition: font-size 0.3s, line-height 0.3s, height 0.3s;
    user-select: none;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 12px;
    color:#7C8187;
    font-weight: 600;
  }
  .aronawa-select-multiple .aronawa-select-selector .aronawa-select-selection-item-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .aronawa-select-multiple .aronawa-select-selector .aronawa-select-selection-overflow {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
  }
  .aronawa-select-multiple .aronawa-select-selector .aronawa-select-selection-overflow-item {
    flex: none;
    max-width: 100%;
    height: fit-content;
  }
  .aronawa-select-multiple .aronawa-select-selector .aronawa-select-selection-search {
    position: relative;
    max-width: 100%;
  }
  .aronawa-select-multiple .aronawa-select-selector .aronawa-select-selection-search-mirror {
    z-index: 999;
    white-space: nowrap;
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
  }
  .aronawa-select-multiple .aronawa-select-selector .aronawa-select-selection-search-input {
    width: 100%;
    height: 26px;
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  .aronawa-select-multiple .aronawa-select-selection-item-remove {
    margin-left: 4px;
    cursor: pointer;
  }
  .aronawa-select-allow-clear.aronawa-select-multiple .aronawa-select-selector {
    padding-right: 32px;
  }
  .aronawa-select-allow-clear:hover .aronawa-select-clear {
    opacity: 1;
  }
  .aronawa-select-dropdown .aronawa-select-tree {
    padding: 0 16px;
  }
  .aronawa-select-allow-clear .aronawa-select-clear {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #d7dade;
    border-radius: 50%;
  }
  .aronawa-select-show-arrow.aronawa-select-multiple .aronawa-select-selector {
    padding-right: 32px;
  }
  .aronawa-select-show-arrow .aronawa-select-arrow {
    pointer-events: none;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .aronawa-select-show-arrow .aronawa-select-arrow-icon::after {
    content: '';
    border: 5px solid transparent;
    width: 0;
    height: 0;
    display: inline-block;
    border-top-color: #a5aab0;
    transform: translateY(5px);
  }
  .aronawa-select-focused .aronawa-select-selector {
    border-color: #225db2;
  }
  .aronawa-select-dropdown {
    padding: 8px;
    position: absolute;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
    z-index: 9999;
    width: auto !important;
  }
  .aronawa-select-dropdown-hidden {
    display: none;
  }
  .aronawa-select-item {
    font-size: 14px;
    line-height: 26px;
    padding: 4px 8px;
  }
  .aronawa-select-item-group {
    font-weight: 700;
  }
  .aronawa-select-item-option {
    position: relative;
    cursor: pointer;
    border-radius: 3px;
  }
  .aronawa-select-item-option-grouped {
    padding-left: 24px;
  }
  .aronawa-select-item-option-selected {
    color: #225db2;
  }
  .aronawa-select-item-option .aronawa-select-item-option-state {
    position: absolute;
    right: 0;
    top: 4px;
    pointer-events: none;
    display: none;
  }
  .aronawa-select-item-option-active {
    background: #f5f7fa;
  }
  .aronawa-select-item-option-disabled {
    color: #a5aab0;
  }
  .aronawa-select-item-empty {
    text-align: center;
    color: #a5aab0;
  }
  .aronawa-select-selection__choice-zoom {
    transition: all 0.3s;
  }
  .aronawa-select-selection__choice-zoom-appear {
    opacity: 0;
    transform: scale(0.5);
  }
  .aronawa-select-selection__choice-zoom-appear.aronawa-select-selection__choice-zoom-appear-active {
    opacity: 1;
    transform: scale(1);
  }
  .aronawa-select-selection__choice-zoom-leave {
    opacity: 1;
    transform: scale(1);
  }
  .aronawa-select-selection__choice-zoom-leave.aronawa-select-selection__choice-zoom-leave-active {
    opacity: 0;
    transform: scale(0.5);
  }
  .aronawa-select-dropdown-slide-up-enter,
  .aronawa-select-dropdown-slide-up-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-play-state: paused;
  }
  .aronawa-select-dropdown-slide-up-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    transform-origin: 0 0;
    opacity: 1;
    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
    animation-play-state: paused;
  }
  .aronawa-select-dropdown-slide-up-enter.aronawa-select-dropdown-slide-up-enter-active.aronawa-select-dropdown-placement-bottomLeft,
  .aronawa-select-dropdown-slide-up-appear.aronawa-select-dropdown-slide-up-appear-active.aronawa-select-dropdown-placement-bottomLeft {
    animation-name: aronawaSelectDropdownSlideUpIn;
    animation-play-state: running;
  }
  .aronawa-select-dropdown-slide-up-leave.aronawa-select-dropdown-slide-up-leave-active.aronawa-select-dropdown-placement-bottomLeft {
    animation-name: aronawaSelectDropdownSlideUpOut;
    animation-play-state: running;
  }
  .aronawa-select-dropdown-slide-up-enter.aronawa-select-dropdown-slide-up-enter-active.aronawa-select-dropdown-placement-topLeft,
  .aronawa-select-dropdown-slide-up-appear.aronawa-select-dropdown-slide-up-appear-active.aronawa-select-dropdown-placement-topLeft {
    animation-name: aronawaSelectDropdownSlideDownIn;
    animation-play-state: running;
  }
  .aronawa-select-dropdown-slide-up-leave.aronawa-select-dropdown-slide-up-leave-active.aronawa-select-dropdown-placement-topLeft {
    animation-name: aronawaSelectDropdownSlideDownOut;
    animation-play-state: running;
  }
  @keyframes aronawaSelectDropdownSlideUpIn {
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
  @keyframes aronawaSelectDropdownSlideUpOut {
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
  @keyframes aronawaSelectLoadingIcon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
