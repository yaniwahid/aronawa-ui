import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IInput } from './Input.types';

const fontSizeProps = {
  sm: {
    fontSize: 12,
  },
  md: {
    fontSize: 14,
  },
  lg: {
    fontSize: 16,
  },
};

const paddingProps = {
  sm: 6,
  md: 8,
  lg: 12,
};

export const InputStyled = styled.div<IInput>(
  ({ size = "md", isInvalid, leftAddon, rightAddon, isDisabled, leftElement, rightElement }) => {
    let cssTmp: object = {};
    let HEIGHT: number = 32;
    let FONT_SIZE: number = 14;
    let PADDING: string = '4px 8px';
    switch (size) {
      case 'sm':
        HEIGHT = 24;
        PADDING = '2px 6px';
        FONT_SIZE = 12;
        break;
      case 'lg':
        HEIGHT = 40;
        PADDING = '4px 12px';
        FONT_SIZE = 12;
        break;
      default:
        break;
    }
    if (leftAddon || rightAddon || leftElement || rightElement) {
      cssTmp = {
        ...cssTmp,
        '& input': {
          flex: '1 1 auto',
          height: HEIGHT - 2,
          border: 0,
          width: '1% !important',
          '&::placeholder': {
            color: Color.slate[500],
          },
        },
        button: {
          height: HEIGHT - 8,
          lineHeight: `${HEIGHT - 8}px`,
        },
      };
    } else {
      cssTmp = {
        ...cssTmp,
        '& input': {
          height: HEIGHT,
          border: `1px solid ${isInvalid ? Color.danger.default : Color.slate[500]}`,
          width: '100%',
          '&:focus': {
            borderColor: isInvalid ? Color.danger.default : Color.primary.default,
            boxShadow: `0 0 0 2px ${isInvalid ? Color.danger.default : Color.primary.default}33`,
          },
          '&::placeholder': {
            color: Color.slate[500],
          },
        },
      };
    }
    cssTmp = {
      ...cssTmp,
      position: 'relative',
      width: '100%',
      input: {
        backgroundColor: Color.light,
        padding: PADDING,
        fontSize: `${FONT_SIZE}px`,
        position: 'relative',
        borderRadius: Radius.blunt,
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'all 0.3s',
        lineHeight: 1.5,
        color: Color.font.ink,
        ...fontSizeProps[size],
        ...isDisabled && {
          cursor: 'not-allowed',
          backgroundColor: Color.slate[200],
        }
      },
    };
    return { ...cssTmp };
  },
);

export const InputGroup = styled.div<IInput>(({ isDisabled, isInvalid }) => ({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  width: '100%',
  border: `1px solid ${isInvalid ? Color.danger.default : Color.slate[500]}`,
  backgroundColor: Color.light,
  borderRadius: Radius.blunt,
  transition: 'all 0.3s',
  '&:focus-within': {
    borderColor: isInvalid ? Color.danger.default : Color.primary.default,
    boxShadow: `0 0 0 2px ${isInvalid ? Color.danger.default : Color.primary.default}33`,
  },
  ...isDisabled && {
    cursor: 'not-allowed',
    backgroundColor: Color.slate[200],
  }
}));

export const InputAddon = styled.div<IInput>(({ size = 'md', rightAddon }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: Color.slate[800],
  paddingLeft: paddingProps[size],
  paddingRight: paddingProps[size],
  backgroundColor: Color.slate[100],
  ...fontSizeProps[size],
  ...rightAddon ? {
    borderTopRightRadius: Radius.blunt,
    borderBottomRightRadius: Radius.blunt,
  } : {
    borderTopLeftRadius: Radius.blunt,
    borderBottomLeftRadius: Radius.blunt,
  }
}));

export const InputElement = styled.div<IInput>(({ size = 'md', rightElement }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: Color.slate[800],
  ...fontSizeProps[size],
  ...rightElement ? {
    paddingRight: paddingProps[size],
  } : {
    paddingLeft: paddingProps[size],
  }
}));

