import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DatepickerStyled = css`
  .aronawa-picker {
    display: flex;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',
  }
  .aronawa-picker-rtl {
    direction: rtl;
  }
  .aronawa-picker-focused .aronawa-picker-input > input {
    border-color: #a5aab0;
  }
  .aronawa-picker-panel {
    background: #fff;
    display: inline-block;
    vertical-align: top;
    border-radius: 5px;
  }
  .aronawa-picker-panel-focused {
    border-color: #225db2;
  }
  .aronawa-picker-panel-rtl {
    direction: rtl;
  }
  .aronawa-picker-decade-panel,
  .aronawa-picker-year-panel,
  .aronawa-picker-month-panel,
  .aronawa-picker-week-panel,
  .aronawa-picker-date-panel,
  .aronawa-picker-time-panel {
    display: flex;
    flex-direction: column;
  }
  .aronawa-picker-decade-panel table,
  .aronawa-picker-year-panel table,
  .aronawa-picker-month-panel table,
  .aronawa-picker-week-panel table,
  .aronawa-picker-date-panel table,
  .aronawa-picker-time-panel table {
    text-align: center;
    border-collapse: collapse;
  }
  .aronawa-picker-header {
    display: flex;
    padding: 16px;
    background-color: #f5f7fa;
  }
  .aronawa-picker-header > * {
    flex: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  .aronawa-picker-header > *:hover {
    color: #225db2;
  }
  .aronawa-picker-header-view {
    flex: auto;
    text-align: center;
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  .aronawa-picker-header-view > button {
    border: 0;
    padding: 0;
    font-weight: 700;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
  }
  .aronawa-picker-header-view > button:hover {
    color: #225db2;
  }
  .aronawa-picker-cell {
    color: #7c8187;
  }
  .aronawa-picker-cell-disabled {
    opacity: 0.4;
    color: #9e9e9e !important;
  }
  .aronawa-picker-cell-disabled .aronawa-picker-cell-inner:hover {
    background: #fff !important;
    cursor: not-allowed;
    color: #9e9e9e !important;
  }
  .aronawa-picker-cell-inner {
    font-size: 14px;
    width: 100%;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    padding: 0;
    margin: 4px 8px;
    background: transparent;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    transition: background 0.3s, border 0.3s;
  }
  .aronawa-picker-cell-inner:hover {
    background: #225db2;
    color: #fff;
  }
  .aronawa-picker-cell-in-view {
    color: #121212;
  }
  .aronawa-picker-cell-in-range > .aronawa-picker-cell-inner {
    background: rgba(7, 71, 166, 0.1);
    color: #121212;
    width: 100% !important;
    border-radius: 0 !important;
  }
  .aronawa-picker-cell-selected > .aronawa-picker-cell-inner,
  .aronawa-picker-cell-range-start > .aronawa-picker-cell-inner {
    width: 100% !important;
    border-radius: 25px 0 0 25px !important;
  }
  .aronawa-picker-cell-range-end > .aronawa-picker-cell-inner {
    width: 100% !important;
    border-radius: 0 25px 25px 0 !important;
  }
  .aronawa-picker-cell-range-hover-start,
  .aronawa-picker-cell-range-hover-end,
  .aronawa-picker-cell-range-hover {
    position: relative;
  }
  .aronawa-picker-cell-range-hover-start::after,
  .aronawa-picker-cell-range-hover-end::after,
  .aronawa-picker-cell-range-hover::after {
    content: none;
    position: absolute;
    top: 3px;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid green;
    border-left: 0;
    border-right: 0;
    pointer-events: none;
  }
  .aronawa-picker-cell-range-hover-start::after {
    border-left: 1px solid green !important;
  }
  .aronawa-picker-cell-range-hover-end::after {
    border-right: 1px solid green !important;
  }
  .aronawa-picker-cell-today > .aronawa-picker-cell-inner {
    border: 1px solid #225db2;
  }
  .aronawa-picker-cell-range-start > .aronawa-picker-cell-inner,
  .aronawa-picker-cell-range-end > .aronawa-picker-cell-inner,
  .aronawa-picker-cell-selected > .aronawa-picker-cell-inner {
    background: #225db2;
    color: #fff;
    font-weight: 700;
  }
  .aronawa-picker-footer,
  .aronawa-picker-picker-footer {
    background: #fff;
    padding: 8px 16px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-top: 1px solid #e3e5e8;
  }
  .aronawa-picker-ranges {
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    font-size: 14px;
  }
  .aronawa-picker-ranges > li {
    display: inline-block;
  }
  .aronawa-picker-ok {
    float: right;
  }
  .aronawa-picker-body {
    padding: 8px 12px;
  }
  .aronawa-picker-year-panel .aronawa-picker-cell-inner,
  .aronawa-picker-month-panel .aronawa-picker-cell-inner,
  .aronawa-picker-decade-panel .aronawa-picker-cell-inner {
    width: 80px;
    margin-top: 12px;
    margin-bottom: 12px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
  }
  .aronawa-picker-week-panel-row:hover .aronawa-picker-cell {
    background: #a5aab0;
  }
  .aronawa-picker-week-panel-row-selected .aronawa-picker-cell {
    background: #a5aab0;
    color: #fff;
  }
  .aronawa-picker-week-panel .aronawa-picker-cell,
  .aronawa-picker-week-panel .aronawa-picker-cell-inner {
    width: 24px;
  }
  .aronawa-picker-week-panel .aronawa-picker-cell-week {
    font-size: 12px;
    color: #999;
    font-weight: bold;
  }
  .aronawa-picker .aronawa-picker-range-separator {
    line-height: 32px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .aronawa-picker-week-panel .aronawa-picker-cell:hover > .aronawa-picker-cell-inner,
  .aronawa-picker-week-panel .aronawa-picker-cell-selected > .aronawa-picker-cell-inner {
    background: transparent;
  }
  .aronawa-picker-date-panel .aronawa-picker-cell-inner {
    width: 24px;
    border-radius: 50%;
  }
  .aronawa-picker-time-panel {
    width: auto;
  }
  .aronawa-picker-time-panel .aronawa-picker-content {
    display: flex;
    max-height: 243px;
  }
  .aronawa-picker-time-panel-column {
    flex: none;
    text-align: left;
    list-style: none;
    margin: 0;
    padding: 0 0 180px 0;
    overflow-y: hidden;
    overflow-x: hidden;
    width: 50px;
    transition: background 0.3s;
    font-size: 12px;
  }
  .aronawa-picker-time-panel-column-active {
    background: rgba(0, 0, 255, 0.1);
  }
  .aronawa-picker-time-panel-column:hover {
    overflow-y: auto;
  }
  .aronawa-picker-time-panel-column > li {
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .aronawa-picker-time-panel-column > li .aronawa-picker-time-panel-cell-inner {
    color: #121212;
    margin: 0;
    height: 24px;
    line-height: 24px;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    border-radius: 25px;
  }
  .aronawa-picker-time-panel-column > li .aronawa-picker-time-panel-cell-inner:hover {
    background: #225db2;
    color: #fff;
  }
  .aronawa-picker-panel-rtl
    .aronawa-picker-time-panel-column
    > li
    .aronawa-picker-time-panel-cell-inner {
    padding: 0 16px 0 0;
    text-align: right;
  }
  .aronawa-picker-datetime-panel {
    display: flex;
  }
  .aronawa-picker-datetime-panel .aronawa-picker-time-panel {
    border-left: 1px solid #999;
  }
  .aronawa-picker-datetime-panel .aronawa-picker-date-panel,
  .aronawa-picker-datetime-panel .aronawa-picker-time-panel {
    transition: opacity 0.3s;
  }
  .aronawa-picker-datetime-panel-active .aronawa-picker-date-panel,
  .aronawa-picker-datetime-panel-active .aronawa-picker-time-panel {
    opacity: 0.3;
  }
  .aronawa-picker-datetime-panel-active .aronawa-picker-date-panel-active,
  .aronawa-picker-datetime-panel-active .aronawa-picker-time-panel-active {
    opacity: 1;
  }
  .aronawa-picker-input {
    position: relative;
    display: inline-flex;
    width: 100%;
  }
  .aronawa-picker-rtl .aronawa-picker-input {
    text-align: right;
  }
  .stroom-time-picker .aronawa-picker-input > input {
    padding-right: 16px;
    padding-left: 40px;
  }
  .aronawa-picker-input > input {
    width: 100%;
    min-width: 0px;
    outline: 2px solid transparent;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    font-size: 14px;
    padding: 4px 8px;
    height: 32px;
    border: 1px solid;
    border-color: #a5aab0;
    background: inherit;
    border-radius: 3px;
    padding-right: 40px;
  }
  .aronawa-picker-input > input::-moz-placeholder {
    opacity: 1;
  }
  .aronawa-picker-input > input::placeholder {
    color: #a5aab0;
  }
  .aronawa-picker-input > input:placeholder-shown {
    text-overflow: ellipsis;
  }
  .aronawa-picker-input-placeholder > input {
    color: #a5aab0;
  }
  .aronawa-picker-clear {
    position: absolute;
    right: 4px;
    top: 0;
    cursor: pointer;
  }
  .aronawa-picker-rtl .aronawa-picker-clear {
    right: auto;
    left: 4px;
  }
  .aronawa-picker-clear-btn::after {
    content: '×';
  }
  .aronawa-picker-dropdown {
    position: absolute;
    border-radius: 5px;
    z-index: 9999;
  }
  .aronawa-picker-dropdown-range {
    padding-top: 8px;
  }
  .aronawa-picker-range-wrapper,
  .aronawa-picker-panel-container {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }
  .aronawa-picker-dropdown-hidden {
    display: none;
  }
  .aronawa-picker-dropdown-placement-topLeft .aronawa-picker-range-arrow,
  .aronawa-picker-dropdown-placement-topRight .aronawa-picker-range-arrow {
    bottom: 6px;
    transform: rotate(135deg);
  }
  .aronawa-picker-dropdown-placement-bottomLeft .aronawa-picker-range-arrow,
  .aronawa-picker-dropdown-placement-bottomright .aronawa-picker-range-arrow {
    top: 3px;
    transform: rotate(-45deg);
  }
  .aronawa-picker-dropdown .aronawa-picker-range-arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 1;
    left: 10px;
    margin-left: 10px;
    transition: all 0.3s;
  }
  .aronawa-picker-dropdown-rtl.aronawa-picker-dropdown .aronawa-picker-range-arrow {
    right: 10px;
    left: auto;
    margin-left: 0;
    margin-right: 10px;
  }
  .aronawa-picker-dropdown .aronawa-picker-range-arrow::before,
  .aronawa-picker-dropdown .aronawa-picker-range-arrow::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .aronawa-picker-dropdown-rtl.aronawa-picker-dropdown .aronawa-picker-range-arrow::before,
  .aronawa-picker-dropdown-rtl.aronawa-picker-dropdown .aronawa-picker-range-arrow::after {
    right: 50%;
    left: auto;
    transform: translate(50%, -50%);
  }
  .aronawa-picker-dropdown .aronawa-picker-range-arrow::before {
    width: 10px;
    height: 10px;
    border: 5px solid #d9d9d9;
    border-color: #d9d9d9 #d9d9d9 transparent transparent;
  }
  .aronawa-picker-dropdown .aronawa-picker-range-arrow::after {
    width: 8px;
    height: 8px;
    border: 4px solid #d9d9d9;
    border-color: #fff #fff transparent transparent;
  }
  .aronawa-picker-range {
    display: flex;
    position: relative;
  }
  .aronawa-picker-range .aronawa-picker-input:first-of-type input {
    border-right: 0;
    padding-right: 16px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .aronawa-picker-range .aronawa-picker-range-separator + .aronawa-picker-input input {
    border-left: 0;
    padding-left: 16px !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .aronawa-picker-range-wrapper {
    display: flex;
  }
  .aronawa-picker-range .aronawa-picker-active-bar {
    background: transparent;
    bottom: 0;
    height: 0;
    pointer-events: none;
    transition: all 0.3s;
    opacity: 0;
  }
  .aronawa-picker-disabled input {
    cursor: not-allowed;
    background: #e3e5e8;
  }
  .aronawa-picker-range.aronawa-picker-focused .aronawa-picker-active-bar {
    opacity: 1;
  }

  .aronawa-picker-time-panel-column
    > li.aronawa-picker-time-panel-cell-disabled
    .aronawa-picker-time-panel-cell-inner {
    color: #7c8187;
    opacity: 0.4;
  }
  .aronawa-picker-time-panel-column
    > li.aronawa-picker-time-panel-cell-disabled
    .aronawa-picker-time-panel-cell-inner:hover {
    background: #fff;
    cursor: not-allowed;
  }

  .aronawa-picker-panel-container {
    display: inline-block;
    vertical-align: top;
    transition: margin 0.3s;
  }
`;

export const DatepickerWrapper = styled.div({
  position: 'relative',
});

export const DatepickerIcon = styled.div({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 8,
  display: 'flex',
});
