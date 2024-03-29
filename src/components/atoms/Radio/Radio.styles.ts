import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Shadow from '../../../themes/Shadow';
import { IStyle } from './Radio.types';

const backroundProps = ({ isChecked, isDisabled, isInvalid }: IStyle) => ({
  ...(isChecked && { background: Color.primary.default }),
  ...(isDisabled && { background: Color.slate[200] }),
  ...(isInvalid && { background: Color.danger.default }),
  background: Color.light,
});

const backroundButtonProps = ({ isChecked, isDisabled, isInvalid }: IStyle) => ({
  ...(isChecked && { background: Color.primary.default }),
  ...(isDisabled && { background: Color.slate[200] }),
  ...(isInvalid && { background: Color.danger.default }),
});

const borderColorProps = (isChecked: boolean, isInvalid: boolean) => {
  if (isChecked) {
    return `1px solid ${Color.primary.default}`;
  }
  return isInvalid ? `1px solid ${Color.danger.default}` : `1px solid ${Color.slate[500]}`;
};

const colorProps = (isDisabled: boolean, isChecked: boolean, isInvalid: boolean) => {
  if (isDisabled) {
    return Color.font.pencil;
  } else if (isChecked) {
    return Color.primary.default;
  } else if (isInvalid) {
    return Color.danger.default;
  } else {
    return undefined;
  }
};
const colorButtonProps = (isDisabled: boolean, isChecked: boolean, isInvalid: boolean) => {
  if (isDisabled) {
    return Color.font.pencil;
  } else if (isChecked || isInvalid) {
    return Color.light;
  } else {
    return undefined;
  }
};

export const OptionStyled = styled.label<IStyle>(
  ({ variant }) => ({
    display: variant !== 'default' ? 'inline-flex' : 'flex',
    alignItems: 'center',
    position: 'relative',
    fontSize: 14,
    input: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      opacity: 0,
      margin: 0,
    },
  }),
  ({ isDisabled = false, variant = 'default', isChecked = false, isInvalid = false }) => {
    let cssTmp: object = {};
    if (variant === 'solid') {
      cssTmp = {
        ...cssTmp,
        height: 32,
        paddingLeft: 8,
        alignItems: 'center',
        paddingRight: 8,
        borderRadius: Radius.blunt,
        border: borderColorProps(isChecked, isInvalid),
        ...backroundProps({ isChecked, isDisabled, isInvalid }),
        '& > span:first-of-type': {
          display: 'none',
        },
      };
    } else if (variant === 'button') {
      cssTmp = {
        ...cssTmp,
        height: 32,
        paddingLeft: 8,
        alignItems: 'center',
        paddingRight: 8,
        backgroundColor: Color.neutral.default,
        ...backroundButtonProps({ isChecked, isDisabled, isInvalid }),
        boxShadow: Shadow.platform,
        '& > span:first-of-type': {
          display: 'none',
        },
      };
    }
    cssTmp = {
      ...cssTmp,
      color:
        variant === 'button'
          ? colorButtonProps(isDisabled, isChecked, isInvalid)
          : colorProps(isDisabled, isChecked, isInvalid),
      cursor: 'pointer',
      input: {
        cursor: 'pointer',
      },
      ...(isDisabled && {
        cursor: 'not-allowed',
        input: {
          cursor: 'not-allowed',
        },
      }),
    };

    return { ...cssTmp };
  },
);

export const WrapperCheck = styled.span({
  display: 'inline-block',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  outline: 'none',
  position: 'relative',
});

export const Label = styled.span<IStyle>(({ variant }) => ({
  paddingLeft: 8,
  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
  ...(variant !== 'default' && {
    paddingRight: 8,
  }),
}));

export const Check = styled.div<IStyle>(({ isChecked, isInvalid, isDisabled }) => {
  let cssTmp: object = {
    width: 16,
    height: 16,
    borderRadius: Radius.circle,
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    backgroundColor: Color.light,
    transition: 'background-color .1s linear, border .1s linear',
  };
  let BORDER_COLOR = Color.slate[500];
  let BACKGROUND = Color.light;
  let BACKGROUND_DOT = Color.light;
  if (isChecked && !isInvalid && !isDisabled) {
    BORDER_COLOR = Color.primary.default;
    BACKGROUND_DOT = Color.light;
    BACKGROUND = Color.primary.default;
  } else if (isInvalid && isChecked && !isDisabled) {
    BORDER_COLOR = Color.danger.default;
    BACKGROUND_DOT = Color.danger.default;
  } else if (isInvalid && !isDisabled) {
    BORDER_COLOR = Color.danger.default;
  } else if (isDisabled && isChecked) {
    BACKGROUND_DOT = Color.slate[500];
  }
  cssTmp = {
    ...cssTmp,
    '&:before': {
      width: 16,
      height: 16,
      backgroundColor: BACKGROUND,
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      border: `1px solid ${BORDER_COLOR}`,
      borderRadius: '100%',
      transition: 'background-color .1s linear, border .1s linear',
    },
    '&:after': {
      height: 8,
      width: 8,
      backgroundColor: BACKGROUND_DOT,
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: 4,
      transform: `translateY(-50%) ${isChecked ? 'scale(1, 1)' : 'scale(0, 0)'}`,
      opacity: isChecked ? 1 : 0,
      borderRadius: '100%',
      transition: isChecked
        ? 'all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s'
        : 'all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s',
    },
  };
  return { ...cssTmp };
});

export const RadioStyled = styled.div<IStyle>(({ variant }) => ({
  display: 'flex',
  alignItems: 'center',
  '& > * + *': {
    marginLeft: variant === 'solid' ? 8 : 16,
  },
  ...(variant === 'button' && {
    '& > *:first-of-type': {
      borderTopLeftRadius: Radius.blunt,
      borderBottomLeftRadius: Radius.blunt,
    },
    '& > *:last-of-type': {
      borderTopRightRadius: Radius.blunt,
      borderBottomRightRadius: Radius.blunt,
    },
    '& > * + *': {
      marginLeft: 0,
    },
  }),
}));
