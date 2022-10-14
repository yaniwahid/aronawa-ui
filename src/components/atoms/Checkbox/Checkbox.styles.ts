import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IStyle } from './Checkbox.types';

export const CheckboxStyled = styled.div<IStyle>(({ isDisabled }) => ({
  display: 'inline-flex',
  position: 'relative',
  fontSize: 14,
  cursor: 'pointer',
  alignItems: 'center',
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

export const WrapperCheck = styled.span({
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  outline: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const Label = styled.label<IStyle>(({ isDisabled }) => ({
  paddingLeft: 24,
  display: 'block',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
}));

export const Check = styled.div<IStyle>(({ isChecked, isInvalid, isDisabled }) => {
  let cssTmp: object = {
    width: 16,
    height: 16,
    borderRadius: Radius.blunt,
    display: 'block',
    borderCollapse: 'separate',
    transition: 'all 0.3s',
    position: 'relative',
    top: 0,
    left: 0,
  };
  let BACKGROUND: string = Color.light;
  let BORDER_COLOR: string = Color.slate['500'];
  let COLOR: string = Color.light;
  if (isChecked && !isInvalid && !isDisabled) {
    BACKGROUND = Color.primary.default;
    BORDER_COLOR = Color.primary.default;
  } else if (isInvalid && !isDisabled) {
    BORDER_COLOR = Color.danger.default;
    COLOR = Color.danger.default;
  } else if (isDisabled) {
    BACKGROUND = Color.slate['300'];
    COLOR = Color.slate['500'];
  }
  cssTmp = {
    ...cssTmp,
    backgroundColor: BACKGROUND,
    border: `1px solid ${BORDER_COLOR}`,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    i: {
      position: 'absolute',
      color: COLOR,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: isChecked ? 1 : 0,
      transition: isChecked
        ? 'all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s'
        : 'all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s',
    },
  };
  return { ...cssTmp };
});
