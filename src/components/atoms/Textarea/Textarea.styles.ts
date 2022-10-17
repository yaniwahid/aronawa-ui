import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IStyle } from './Textarea.types';

export const Wrapper = styled.div<IStyle>(({ isInvalid, isDisabled }) => ({
  position: 'relative',
  width: '100%',
  textarea: {
    backgroundColor: Color.light,
    padding: '4px 8px',
    fontSize: 14,
    position: 'relative',
    borderRadius: Radius.blunt,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.3s',
    lineHeight: 1.5,
    color: Color.font.ink,
    minHeight: 64,
    border: `1px solid ${isInvalid ? Color.danger.default : Color.slate[500]}`,
    width: '100%',
    maxWidth: '100%',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol' !important`,
    '&[type=number]::-webkit-inner-spin-button': {
      appearance: 'none',
    },
    '&:focus': {
      borderColor: isInvalid ? Color.danger.default : Color.primary.default,
      boxShadow: `0 0 0 2px ${isInvalid ? Color.danger.default : Color.primary.default}33`,
    },
    '&::placeholder': {
      color: Color.slate[500],
    },
    ...(isDisabled && {
      cursor: 'not-allowed',
      backgroundColor: Color.slate[200],
    }),
  },
}));
