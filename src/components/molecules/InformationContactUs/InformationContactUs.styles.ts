import styled from '@emotion/styled';
import { IStyle } from './InformationContactUs.types';


export const InformationStyled = styled.div<IStyle>(({ background, color }) => ({
  backgroundColor: `${background} !important`,
  color: `${color} !important`,
  paddingTop: 32,
  paddingBottom: 32,
  "@media (max-width: 1199.98px)": {
    "& > div": {
      maxWidth: "100%"
    }
  },
  "@media (max-width: 767.98px)": {
    paddingTop: 24,
    paddingBottom: 24,
  }
}));

export const InformationGrid = styled.div({
  display: "grid",
  gap: 40,
  gridTemplateColumns: "448px 1fr",
  alignItems: "flex-start",
  h4: {
    fontWeight: 700,
    fontFamily: 'geomanistbook,sans-serif',
    fontSize: 28,
    lineHeight: 1.3,
    marginBottom: 8,
  },
  "@media (max-width: 991.98px)": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@media (max-width: 767.98px)": {
    gridTemplateColumns: "1fr",
    gap: 24,
    h4: {
      fontSize: 20,
    }
  }
});

export const Information = styled.div({
  h4: {
    marginBottom: 8,
  }
});

export const Contact = styled.div<IStyle>(({ background, }) => ({
  borderLeft: `1px solid ${background}`,
  paddingLeft: 40,
  lineHeight: 1.3,
  h4: {
    marginBottom: 16,
  },
  "@media (max-width: 767.98px)": {
    borderLeft: 0,
    paddingLeft: 0,
    borderTop: `1px solid ${background}`,
    paddingTop: 24,
    borderBottom: `1px solid ${background}`,
    paddingBottom: 24,
  }
}))

export const FormStyled = styled.div<IStyle>(({ background, color }) => ({
  display: "grid",
  gap: 16,
  gridTemplateColumns: "1fr 1fr",
  "& .button": {
    backgroundColor: `${background} !important`,
    color: `${color} !important`,
  },
  "@media (max-width: 767.98px)": {
    gridTemplateColumns: "1fr",
    "& .button": {
      height: 40,
    }
  }
}));

export const Promo = styled.div<IStyle>(({ background, color }) => ({
  marginTop: 24,
  "& .button": {
    backgroundColor: `${background} !important`,
    color: `${color} !important`,
    minHeight: 48,
    height: "auto",
    whiteSpace: "pre-wrap",
    paddingTop: 8,
    paddingBottom: 8,
  }
}));