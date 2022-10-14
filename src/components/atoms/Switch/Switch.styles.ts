import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IStyle } from './Switch.types';

export const SwitchStyled = styled.div<IStyle>(({ isDisabled }) => ({
  display: 'inline-flex',
  position: 'relative',
  fontSize: 14,
  cursor: 'pointer',
  input: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
    margin: 0,
    ...(isDisabled && {
      cursor: 'not-allowed',
    }),
  },
  ...(isDisabled && {
    color: Color.font.pencil,
    cursor: 'not-allowed',
  }),
}));

export const Label = styled.label<IStyle>(({ isDisabled }) => ({
  paddingLeft: 8,
  display: 'block',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
}));

export const WrapperSwitch = styled.div<IStyle>(({ isChecked, isDisabled }) => {
  let cssTmp: any = {};
  let BACKGROUND = Color.slate[500];
  if (isChecked && !isDisabled) {
    BACKGROUND = Color.primary.default;
  } else if (isDisabled) {
    BACKGROUND = Color.slate[200];
  }
  cssTmp = {
    ...cssTmp,
    display: 'inline-block',
    background: BACKGROUND,
    borderRadius: Radius.rounded,
    width: 40,
    height: 20,
    position: 'relative',
    transition: 'background 0.25s',
    '&:before': {
      display: 'block',
      background: Color.light,
      borderRadius: Radius.circle,
      width: 16,
      height: 16,
      position: 'absolute',
      marginLeft: isChecked ? '-2px' : undefined,
      transform: isChecked ? 'translateX(-100%)' : undefined,
      opacity: isDisabled ? '0.4' : undefined,
      boxShadow: '0 1px 3px 0 rgba(16, 22, 26, 0.2), 0 0 0 1px rgba(16, 22, 26, 0.1)',
      top: 2,
      left: isChecked ? '100%' : 2,
      transition: 'all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      content: '""',
    },
    '&:after': {
      content: '""',
    },
  };
  return cssTmp;
});
