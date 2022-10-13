import styled from '@emotion/styled';
import { space } from 'styled-system';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Shadow from '../../../themes/Shadow';
import { IButton } from './button.types';

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
    fontWeight: 600,
    paddingLeft: 32,
    paddingRight: 32,
    height: 48,
    minWidth: 48
  }
}

const Solid = (color: any) => {
  const styleProps: any = {
    neutral: {
      color: Color.font.ink,
      '&:disabled': {
        color: `${Color.font.ink}99`,
        backgroundColor: Color.neutral.disabled,
      },
    },
    secondary: {
      color: Color.font.ink,
      '&:disabled': {
        color: `${Color.font.ink}99`,
        backgroundColor: Color.secondary.disabled,
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
        boxShadow:
          `0px 0px 0px 3px ${Color.primary.default}2b, 0px 1px 1px 0px rgba(62, 62, 63, 0.2)`,
      },
      '&:disabled': {
        color: `${Color.font.ink}99`,
        backgroundColor: Color.neutral.disabled,
      },
    }
  };
  return {
    backgroundColor: Color[color]['default'],
    color: Color.light,
    '&:hover': {
      backgroundColor: Color[color]['hover'],
    },
    '&:active': {
      backgroundColor: Color[color]['active'],
    },
    '&:focus': {
      backgroundColor: Color[color]['default'],
      boxShadow:
        `0px 0px 0px 3px ${Color[color]['default']}2b, 0px 1px 1px 0px rgba(62, 62, 63, 0.2)`,
    },
    '&:disabled': {
      color: `${Color.light}CC`,
      backgroundColor: Color[color]['disabled'],
    },
    ...styleProps[color]
  }
}

export const ButtonStyled = styled.button<IButton>(
  ({
    color,
    size = "md",
    variant,
    isDisabled,
  }) => {
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
      boxShadow: Shadow.platform,
      fontWeight: 500,
      '&:hover': {
        boxShadow: Shadow.hover,
      },
      ...isDisabled && {
        cursor: 'not-allowed',
      },
      ...Size[size],
    };
    if (variant === 'outline') {
      cssTmp = {
        ...cssTmp,
      };
    } else if (variant === 'ghost') {
      cssTmp = {
        ...cssTmp,
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