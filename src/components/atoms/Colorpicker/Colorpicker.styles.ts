import { css } from '@emotion/react';

export const ColorpickerStyled = css`
.aronawa-color-picker-panel-inner {
  position: relative;
  border-radius: 5px;
  padding-bottom: 8px;
  padding-top: 8px;
}
.aronawa-color-picker-panel-wrap {
  margin: 5px 0 0;
  height: 30px;
  width: 100%;
  position: relative;
}
.aronawa-color-picker-panel-wrap-preview {
  position: absolute;
  right: 8px;
}
.aronawa-color-picker-panel-wrap-ribbon {
  position: absolute;
  left: 8px;
  top: 0;
  right: 43px;
  height: 30px;
}
.aronawa-color-picker-panel-wrap-alpha {
  position: absolute;
  left: 8px;
  right: 43px;
  bottom: 0;
  height: 12.5px;
}
.aronawa-color-picker-panel-wrap-has-alpha .aronawa-color-picker-panel-wrap-ribbon {
  height: 12.5px;
}

.aronawa-color-picker-wrap {
  display: block;
  width: 100%;
  height: 32px;
  display: block;
  border-radius: 3px;
  border: 1px solid #a5aab0;
  padding: 4px 8px;
}
.aronawa-color-picker-trigger {
  height: 100%;
  width: 100%;
  border-radius: 3px;
  display: block;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;  
  border: 1px solid #a5aab0;
  cursor: pointer;
}
.aronawa-color-picker-trigger-open {
  box-shadow: 0px 0px 3px #999;
}
.aronawa-color-picker-panel {
  width: 218px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  box-sizing: border-box;
  outline: none;
  z-index: 9;
  border-radius: 5px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 8px;
}
.aronawa-color-picker-panel * {
  box-sizing: border-box;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
}
.aronawa-color-picker-panel-open {
  display: block;
}
.aronawa-color-picker-panel-close {
  display: none;
}
.aronawa-color-picker-panel-preview {
  height: 30px;
  width: 30px;
  overflow: hidden;
  border-radius: 2px;
  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');
}
.aronawa-color-picker-panel-preview span {
  box-shadow: 0 0 2px #808080 inset;
}
.aronawa-color-picker-panel-preview span,
.aronawa-color-picker-panel-preview input[type=color] {
  position: absolute;
  display: block;
  height: 100%;
  width: 30px;
  border-radius: 2px;
}
.aronawa-color-picker-panel-preview input[type=color] {
  opacity: 0;
}
.aronawa-color-picker-panel-board {
  position: relative;
  font-size: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  margin: 0 8px;
}
.aronawa-color-picker-panel-board span {
  position: absolute;
  border-radius: 10px;
  border: 1px solid #fff;
  width: 9px;
  height: 9px;
  margin: -4px 0 0 -4px;
  left: -999px;
  top: -999px;
  box-shadow: 0 0 1px rgba(120, 120, 120, 0.7);
  z-index: 2;
}
.aronawa-color-picker-panel-board-hsv {
  width: 200px;
  height: 150px;
  position: relative;
  z-index: 1;
  border-radius: 2px;
}
.aronawa-color-picker-panel-board-value {
  border-radius: 2px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYigwLDAsMCkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -webkit-linear-gradient(top, transparent 0%, #000000 100%);
  background-image: -moz-linear-gradient(top, transparent 0%, #000000 100%);
  background-image: -o-linear-gradient(top, transparent 0%, #000000 100%);
  background-image: linear-gradient(to bottom, transparent 0%, #000000 100%);
}
.aronawa-color-picker-panel-board-saturation {
  border-radius: 2px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiKDAsMCwwKSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -webkit-linear-gradient(left, #ffffff 0%, transparent 100%);
  background-image: -moz-linear-gradient(left, #ffffff 0%, transparent 100%);
  background-image: -o-linear-gradient(left, #ffffff 0%, transparent 100%);
  background-image: linear-gradient(to right, #ffffff 0%, transparent 100%);
}
.aronawa-color-picker-panel-board-handler {
  box-shadow: 0 0 2px #808080 inset;
  border-radius: 2px;
  cursor: crosshair;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.aronawa-color-picker-panel-ribbon {
  position: relative;
  height: 100%;
  border-radius: 2px;
  box-shadow: 0 0 2px #808080 inset;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAlIiBzdG9wLWNvbG9yPSIjZmY5OTAwIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iI2NkZmYwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiMzNWZmMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDBmZjY2IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwZmZmZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMwMDY2ZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMzIwMGZmIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2NkMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI5MCUiIHN0b3AtY29sb3I9IiNmZjAwOTkiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -webkit-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);
  background-image: -moz-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);
  background-image: -o-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);
  background-image: linear-gradient(to right, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);
}
.aronawa-color-picker-panel-ribbon span {
  position: absolute;
  top: 0;
  height: 100%;
  width: 4px;
  border: 1px solid #000000;
  padding: 1px 0;
  margin-left: -2px;
  background-color: #fff;
  border-radius: 3px;
}
.aronawa-color-picker-panel-ribbon-handler {
  position: absolute;
  width: 104%;
  height: 100%;
  left: -2%;
  cursor: pointer;
}
.aronawa-color-picker-panel-alpha {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 2px;
  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');
  background-repeat: repeat;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.aronawa-color-picker-panel-alpha-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: 0 0 2px #808080 inset;
}
.aronawa-color-picker-panel-alpha span {
  position: absolute;
  top: 0;
  height: 100%;
  width: 4px;
  border: 1px solid #000000;
  padding: 1px 0;
  margin-left: -2px;
  background-color: #fff;
  border-radius: 3px;
}
.aronawa-color-picker-panel-alpha-handler {
  position: absolute;
  width: 104%;
  height: 100%;
  left: -2%;
  cursor: pointer;
}
.aronawa-color-picker-panel-params {
  font-size: 12px;
}
.aronawa-color-picker-panel-params-input {
  overflow: hidden;
  padding: 2px 8px;
}
.aronawa-color-picker-panel-params input {
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  text-align: center;
  padding: 1px;
  margin: 0;
  float: left;
  border-radius: 2px;
  border: 1px solid #a5aab0;
  
}
.aronawa-color-picker-panel-params-hex {
  width: 52px;
}
.aronawa-color-picker-panel-params input[type=number] {
  margin-left: 5px;
  width: 44px;
}
.aronawa-color-picker-panel-params input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.aronawa-color-picker-panel-params-lable {
  padding: 2px 8px;
  height: 22px;
  line-height: 18px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.aronawa-color-picker-panel-params-lable label {
  float: left;
  text-align: center;
}
.aronawa-color-picker-panel-params-lable-hex {
  width: 52px;
}
.aronawa-color-picker-panel-params-lable-number,
.aronawa-color-picker-panel-params-lable-alpha {
  margin-left: 5px;
  width: 44px;
  text-transform: uppercase;
}
.aronawa-color-picker-panel-params-lable-number:hover {
  border-radius: 2px;
  background-color: #eee;
  box-shadow: 0 0 0 1px #ccc inset;
  cursor: pointer;
}
.aronawa-color-picker-panel-params-has-alpha input[type=number] {
  width: 32px;
}
.aronawa-color-picker-panel-params-has-alpha .aronawa-color-picker-panel-params-lable-number,
.aronawa-color-picker-panel-params-has-alpha .aronawa-color-picker-panel-params-lable-alpha {
  width: 32px;
}
.aronawa-color-picker {
  position: absolute;
  left: -9999px;
  top: -9999px;
  z-index: 1000;
}
.aronawa-color-picker-slide-up-enter {
  animation-duration: .3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  display: block !important;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}
.aronawa-color-picker-slide-up-appear {
  animation-duration: .3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  display: block !important;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}
.aronawa-color-picker-slide-up-leave {
  animation-duration: .3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  display: block !important;
  opacity: 1;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}
.aronawa-color-picker-slide-up-enter.aronawa-color-picker-slide-up-enter-active.aronawa-color-picker-placement-bottomLeft,
.aronawa-color-picker-slide-up-enter.aronawa-color-picker-slide-up-enter-active.aronawa-color-picker-placement-bottomRight,
.aronawa-color-picker-slide-up-appear.aronawa-color-picker-slide-up-appear-active.aronawa-color-picker-placement-bottomLeft,
.aronawa-color-picker-slide-up-appear.aronawa-color-picker-slide-up-appear-active.aronawa-color-picker-placement-bottomRight {
  animation-name: rcColorPickerSlideUpIn;
  animation-play-state: running;
}
.aronawa-color-picker-slide-up-enter.aronawa-color-picker-slide-up-enter-active.aronawa-color-picker-placement-topLeft,
.aronawa-color-picker-slide-up-enter.aronawa-color-picker-slide-up-enter-active.aronawa-color-picker-placement-topRight,
.aronawa-color-picker-slide-up-appear.aronawa-color-picker-slide-up-appear-active.aronawa-color-picker-placement-topLeft,
.aronawa-color-picker-slide-up-appear.aronawa-color-picker-slide-up-appear-active.aronawa-color-picker-placement-topRight {
  animation-name: rcColorPickerSlideDownIn;
  animation-play-state: running;
}
.aronawa-color-picker-slide-up-leave.aronawa-color-picker-slide-up-leave-active.aronawa-color-picker-placement-bottomLeft,
.aronawa-color-picker-slide-up-leave.aronawa-color-picker-slide-up-leave-active.aronawa-color-picker-placement-bottomRight {
  animation-name: rcColorPickerSlideUpOut;
  animation-play-state: running;
}
.aronawa-color-picker-slide-up-leave.aronawa-color-picker-slide-up-leave-active.aronawa-color-picker-placement-topLeft,
.aronawa-color-picker-slide-up-leave.aronawa-color-picker-slide-up-leave-active.aronawa-color-picker-placement-topRight {
  animation-name: rcColorPickerSlideDownOut;
  animation-play-state: running;
}
@keyframes rcColorPickerSlideUpIn {
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
@keyframes rcColorPickerSlideUpOut {
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
@keyframes rcColorPickerSlideDownIn {
  0% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scaleY(1);
  }
}
@keyframes rcColorPickerSlideDownOut {
  0% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: scaleY(0);
  }
}

`