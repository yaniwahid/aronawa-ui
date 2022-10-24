import { ReactNode } from 'react';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface IBox
  extends SpaceProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    TypographyProps,
    BorderProps,
    GridProps,
    ShadowProps {
  children?: ReactNode;
}
