import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { ICollapse, IStyle } from './Collapse.types';

export const CollapseStyled = styled.div<ICollapse>({
  backgroundColor: Color.light,
  border: `1px solid ${Color.slate[200]}`,
  borderRadius: Radius.curved,
  borderBottom: 0,
  '& > div': {
    '& > div:first-of-type': {
      padding: '8px 16px',
    },
  },
  '& > div:last-of-type': {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export const Wrapper = styled.div({
  borderBottom: `1px solid ${Color.slate[200]}`,
});

export const Content = styled.div<IStyle>(({ isShow }) => ({
  overflow: isShow ? undefined : 'hidden',
  position: 'relative',
  opacity: isShow ? 1 : 0,
  maxHeight: isShow ? 'initial' : 0,
  transition: 'all 0.3s ease-in-out',
}));

export const Body = styled.div({
  padding: 16,
  fontSize: 14,
});

export const Toggle = styled.div<IStyle>(({ isShow, isDisabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.3s',
  h4: {
    fontSize: 16,
    fontWeight: 600,
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    '& > span': {
      marginRight: 4,
    },
  },
  '& .arrow': {
    transition: 'transform 0.3s, -webkit-transform 0.3s',
    transform: isShow ? 'rotate(180deg)' : undefined,
    display: "flex"
  },
}));
