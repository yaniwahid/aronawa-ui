import styled from '@emotion/styled';
import Color from '../../../themes/Color';

export const PageHeaderWrapper = styled.div({
  position: 'relative',
});

export const PageHeaderStyled = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 24,
  '@media(max-width: 991.98px)': {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
    display: 'block',
  },
});

export const TitleWrapper = styled.div({
  marginRight: 'auto',
});

export const TitleStyled = styled.h1({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'geomanistmedium,sans-serif',
  fontSize: 28,
  '& > *': {
    marginLeft: 8,
  },
  '@media(max-width: 991.98px)': {
    fontSize: 16,
  },
});

export const SubtitleStyled = styled.p({
  marginBottom: 0,
  color: Color.font.pencil,
  '@media(max-width: 991.98px)': {
    marginBottom: 16,
    color: Color.font.pencil,
    fontSize: 12,
  },
});

export const ChildrenWrapper = styled.div({
  display: 'flex',
  marginLeft: 16,
  '& > *': {
    '& + *': {
      marginLeft: 8,
    },
  },
  '@media(max-width: 991.98px)': {
    display: 'grid',
    marginLeft: 0,
    gridGap: 8,
    gridTemplateColumns: '1fr 1fr',
    '& > *': {
      '& + *': {
        marginLeft: 0,
      },
    },
  },
});

export const BreadcrumbWrapper = styled.div({
  marginBottom: 24,
  '& > div': {
    padding: 0,
    position: 'relative',
    maxWidth: '100%',
    overflow: 'scroll',
    overflowX: 'auto',
    overflowY: 'hidden',
    display: '-webkit-box',
  },
  '@media(max-width: 991.98px)': {
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    '& > div': {
      fontSize: 12,
    },
  },
});

export const Back = styled.div({
  marginBottom: 8,
});
