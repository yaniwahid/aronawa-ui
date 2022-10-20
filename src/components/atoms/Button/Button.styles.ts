import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { space } from 'styled-system';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Shadow from '../../../themes/Shadow';
import { IButton } from './button.types';

const Colors = Color as any;

const Size = {
  sm: {
    fontSize: 12,
    paddingLeft: 8,
    paddingRight: 8,
    height: 24,
    minWidth: 24,
  },
  md: {
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 16,
    height: 32,
    minWidth: 32,
  },
  lg: {
    fontSize: 16,
    paddingLeft: 24,
    paddingRight: 24,
    height: 40,
    minWidth: 40,
  },
  xl: {
    fontSize: 16,
    paddingLeft: 32,
    paddingRight: 32,
    height: 48,
    minWidth: 48,
  },
};

const Solid = (color: any) => {
  const styleProps: any = {
    neutral: {
      color: Color.font.ink,
      '&:disabled': {
        color: `${Color.font.ink}99`,
        backgroundColor: Color.neutral.disabled,
        boxShadow: Shadow.platform,
      },
    },
    secondary: {
      color: Color.font.ink,
      '&:disabled': {
        color: `${Color.font.ink}99`,
        backgroundColor: Color.secondary.disabled,
        boxShadow: Shadow.platform,
      },
    },
    light: {
      color: Color.primary.default,
      backgroundColor: Color.light,
      '&:hover': {
        backgroundColor: Color.slate[50],
      },
      '&:focus': {
        backgroundColor: Color.light,
        boxShadow: `0px 0px 0px 3px ${Color.primary.default}2b, 0px 1px 1px 0px rgba(62, 62, 63, 0.2)`,
      },
      '&:disabled': {
        color: `${Color.font.ink}99`,
        backgroundColor: Color.neutral.disabled,
        boxShadow: Shadow.platform,
      },
    },
  };
  return {
    backgroundColor: Colors[color]['default'],
    color: Color.light,
    boxShadow: Shadow.platform,
    '&:hover': {
      backgroundColor: Colors[color]['hover'],
      boxShadow: Shadow.hover,
    },
    '&:active': {
      backgroundColor: Colors[color]['active'],
    },
    '&:focus': {
      backgroundColor: Colors[color]['default'],
      boxShadow: `0px 0px 0px 3px ${Colors[color]['default']}2b, 0px 1px 1px 0px rgba(62, 62, 63, 0.2)`,
    },
    '&:disabled': {
      color: `${Color.light}CC`,
      backgroundColor: Colors[color]['disabled'],
      boxShadow: Shadow.platform,
    },
    ...styleProps[color],
  };
};

const Outline = (color: any) => {
  const styleProps: any = {
    neutral: {
      color: Color.font.ink,
      borderColor: Color.font.ink,
      '&:hover': {
        borderColor: Color.font.ink,
      },
      '&:active': {
        borderColor: Color.font.ink,
      },
      '&:disabled': {
        color: `${Color.font.ink}CC`,
      },
    },
    light: {
      color: Color.primary.default,
      borderColor: Color.primary.default,
      '&:hover': {
        borderColor: Color.primary.default,
      },
      '&:active': {
        borderColor: Color.primary.default,
      },
      '&:disabled': {
        color: `${Color.primary.default}CC`,
      },
    },
  };
  return {
    borderColor: Colors[color]['default'],
    color: Colors[color]['default'],
    backgroundColor: Color.light,
    '&:hover': {
      borderColor: Colors[color]['hover'],
      backgroundColor: Colors[color]['lightest'],
    },
    '&:active': {
      borderColor: Colors[color]['active'],
    },
    '&:focus': {
      borderColor: Colors[color]['default'],
      boxShadow: `0px 0px 0px 3px ${Colors[color]['default']}2b, 0px 1px 1px 0px rgba(62, 62, 63, 0.2)`,
    },
    '&:disabled': {
      backgroundColor: Color.light,
      color: `${Colors[color]['default']}CC`,
    },
    ...styleProps[color],
  };
};
const Ghost = (color: any) => {
  const styleProps: any = {
    neutral: {
      color: Color.font.ink,
      '&:disabled': {
        backgroundColor: Color.light,
        color: `${Color.font.ink}CC`,
      },
    },
    light: {
      color: Color.primary.default,
      '&:disabled': {
        backgroundColor: Color.light,
        color: `${Color.primary.default}CC`,
      },
    },
  };
  return {
    color: Colors[color]['default'],
    backgroundColor: Color.light,
    '&:hover': {
      backgroundColor: Colors[color]['lightest'],
    },
    '&:disabled': {
      backgroundColor: Color.light,
      color: `${Colors[color]['default']}CC`,
    },
    ...styleProps[color],
  };
};

export const ButtonStyled = styled.button<IButton>(
  ({ color, size = 'md', variant, isDisabled, isFullWidth }) => {
    let cssTmp: object = {
      position: 'relative',
      display: 'inline-flex',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'none',
      border: '1px solid transparent',
      borderRadius: Radius.blunt,
      cursor: 'pointer',
      transition: 'all .3s cubic-bezier(0.645, 0.045, 0.355, 1)',
      touchAction: 'manipulation',
      outline: 'none',
      verticalAlign: 'middle',
      textDecoration: 'none',
      boxSizing: 'border-box',
      fontWeight: 500,
      fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
      ...(isDisabled && {
        cursor: 'not-allowed',
      }),
      ...(isFullWidth && {
        width: '100%',
      }),
      ...Size[size],
    };
    if (variant === 'outline') {
      cssTmp = {
        ...cssTmp,
        ...Outline(color),
      };
    } else if (variant === 'ghost') {
      cssTmp = {
        ...cssTmp,
        ...Ghost(color),
      };
    } else if (variant === 'link') {
      cssTmp = {
        ...cssTmp,
        ...Ghost(color),
        padding: 0,
        height: 'auto',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: '0.2px',
        '&:hover': {
          backgroundColor: Color.light,
        },
      };
    } else if (variant === 'text') {
      cssTmp = {
        ...cssTmp,
        ...Ghost(color),
        padding: 0,
        height: 'auto',
        fontWeight: 400,
        '&:hover': {
          backgroundColor: Color.light,
        },
      };
    } else {
      cssTmp = {
        ...cssTmp,
        ...Solid(color),
      };
    }

    return { ...cssTmp };
  },
  space,
);

const loader = keyframes({
  from: {
    transform: 'translateY(-50%) rotate(0deg)',
  },
  to: {
    transform: 'translateY(-50%) rotate(360deg)',
  },
});

export const Loading = styled.span(({ hasChild }: any) => ({
  position: 'relative',
  width: 14,
  ...(hasChild && {
    marginRight: 8,
  }),
  span: {
    position: 'absolute',
    height: 14,
    width: 14,
    top: '50%',
    left: 0,
    backgroundColor: 'transparent',
    opacity: 1,
    borderRadius: '50%',
    borderTop: '2px solid currentColor',
    borderLeft: '2px solid currentColor',
    borderBottom: '2px solid currentColor',
    borderRight: '2px solid transparent',
    animationName: loader,
    animationDuration: '0.45s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
}));
