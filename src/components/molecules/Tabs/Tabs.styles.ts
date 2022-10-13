import styled from '@emotion/styled';
import { space } from "styled-system";
import Color from '../../../themes/Color';
import { IStyle } from './Tabs.types';

export const TabsStyled = styled.div({
  position: 'relative',
}, space);

export const TabsList = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  "@media (max-width: 767.98px)": {
    maxWidth: '100%',
    overflow: 'auto hidden',
    whiteSpace: 'nowrap',
    flexWrap: 'revert',
  },
  '& > div:last-of-type': {
    marginRight: 0,
  },
});

export const TitleWrapper = styled.div({
  marginRight: 8,
  position: 'relative',
});

export const Title = styled.div<IStyle>(({ isSelected }) => ({
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: 12,
  padding: '8px 16px',
  color: Color.font.ink,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  '& > span:first-of-type': {
    marginRight: 8,
    '& + span': {
      backgroundColor: Color.neutral.lightest,
      color: Color.neutral.text,
    },
  },
  '&:hover': {
    color: Color.primary.default,
  },
  ...isSelected && {
    color: Color.primary.default,
    '& > span:first-of-type': {
      '& + span': {
        backgroundColor: Color.primary.lightest,
        color: Color.primary.text
      },
    },
  }

}));

export const Bar = styled.div<IStyle>(({ isSelected }) => ({
  height: 2,
  position: 'absolute',
  left: 0,
  bottom: -2,
  width: '100%',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  transition: 'all 0.3s ease',
  ...isSelected && {
    background: Color.primary.default
  }
}));

export const Content = styled.div({
  paddingTop: 24,
  paddingBottom: 24,
  borderTop: `2px solid ${Color.slate[200]}`,
});

export const TabsItemStyled = styled.div({
  position: 'relative',
});
