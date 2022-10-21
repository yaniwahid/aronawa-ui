import styled from '@emotion/styled';
import Radius from '../../../themes/Radius';
import { IStyle } from './Header.types';

export const HeaderStyled = styled.div({
});

export const HeaderDesktop = styled.div<IStyle>(({ background }) => ({
  zIndex: 99,
  backgroundColor: `${background} !important`,
  position: 'relative',
  height: 72,
  "& > div": {
    display: "flex",
    alignItems: "stretch",
    height: 72,
    "& > * + *": {
      marginLeft: 24,
    }
  },
  "@media (max-width: 1199.98px)": {
    "& > div": {
      maxWidth: "100%"
    }
  },
  "@media (max-width: 767.98px)": {
    display: "none"
  }
}));

export const HeaderLogo = styled.div({
  display: "flex",
  alignItems: "center",
  a: {
    display: "flex",
    alignItems: "center",
    img: {
      height: 36
    }
  }
});

export const HeaderCategories = styled.div({
  display: "flex",
  alignItems: "center",
  paddingLeft: 16,
  paddingRight: 16,
  cursor: "pointer",
  img: {
    width: 20,
  }
});

export const CategoriesText = styled.div<IStyle>(({ color }) => ({
  color: `${color} !important`,
  marginRight: 8
}));


export const HeaderSearch = styled.div<IStyle>(({ color, background, outline }) => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
  input: {
    fontSize: 14,
    color: `${color} !important`,
  },
  '& .input-group': {
    backgroundColor: `${background} !important`,
    borderColor: outline,
    "&:focus-within": {
      boxShadow: "none"
    },
    img: {
      width: 20
    }
  }
}));

export const HeaderBeforeLogin = styled.div({
  display: "flex",
  alignItems: "center",
  img: {
    width: 24,
    cursor: "pointer",
  },
  a: {
    display: "flex",
    alignItems: "center",
    position: "relative"
  },
  "& > * + *": {
    marginLeft: 16,
  },
  "@media (max-width: 767.98px)": {
    position: "absolute",
    top: -30,
    right: 16,
  }
});

export const HeaderAfterLogin = styled.div({
  display: "flex",
  alignItems: "center",
  img: {
    width: 24,
    cursor: "pointer",
  },
  "& .aronawa-dropdown": {
    top: "70px !important",
  },
  a: {
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  "& > * + *": {
    marginLeft: 16,
  },
  "@media (max-width: 767.98px)": {
    position: "absolute",
    top: -30,
    right: 16,
    a: {
      width: "auto",
    },
  }
});

export const ButtonStyled = styled.div<IStyle>(({ color, background }) => ({
  "& .button": {
    fontSize: 14,
    backgroundColor: `${background} !important`,
    color: `${color} !important`,
  }
}));

export const HeaderMenu = styled.div<IStyle>(({ background, color }) => ({
  backgroundColor: `${background} !important`,
  display: "flex",
  alignItems: "center",
  minHeight: 40,
  "@media (max-width: 1199.98px)": {
    "& > div": {
      maxWidth: "100%"
    }
  },
  a: {
    color: `${color} !important`,
  }
}));

export const HeaderMenuList = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: 'inherit',
  maxWidth: '100%',
  overflowX: 'auto',
  overflowY: "hidden",
  whiteSpace: 'nowrap',
  "& > * + *": {
    marginLeft: 16,
  },
  "@media (max-width: 767.98px)": {
    marginLeft: -16,
    marginRight: -16,
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: 'calc(100% + 32px)',
  }
})


export const Counter = styled.div<IStyle>(({ background, color, outline }) => ({
  backgroundColor: `${background} !important`,
  color: `${color} !important`,
  border: `2px solid ${outline}`,
  fontSize: 10,
  fontWeight: 500,
  height: 18,
  minWidth: 18,
  borderRadius: 25,
  paddingLeft: 2,
  paddingRight: 2,
  position: "absolute",
  top: -8,
  right: -8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const HeaderMobile = styled.div<IStyle>(({ background }) => ({
  zIndex: 99,
  backgroundColor: `${background} !important`,
  position: 'relative',
  display: "none",
  "& .sticky-outer-wrapper.active": {
    "& .header-mobile-bottom": {
      paddingTop: 8,
      paddingBottom: 8,
    },
    "& .header-search": {
      paddingLeft: 16,
      paddingRight: 16,
    },
    "& .header-mobile-menu": {
      position: "relative",
      top: "auto",
      left: "auto",
    },
    "& .header-mobile-action": {
      position: "relative",
      top: "auto",
      right: "auto"
    }
  },
  "@media (max-width: 767.98px)": {
    display: "block"
  }
}));

export const HeaderMobileTop = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 16px 0 16px",
})

export const HeaderMobileBottom = styled.div<IStyle>(({ background }) => ({
  padding: "12px 16px",
  paddingTop: 16,
  backgroundColor: `${background} !important`,
  display: "flex",
  alignItems: "center",
  "& .header-search": {
    paddingLeft: 0,
    paddingRight: 0,
    transition: "all 0.1s ease",
  }
}))

export const HeaderMobileMenu = styled.div({
  position: "absolute",
  top: -30,
  left: 16,
  cursor: "pointer",
  img: {
    width: 24,
  }
})


export const MenuMobileList = styled.div({
  "& > * + *": {
    marginTop: 32,
  }
})

export const MenuMobileParentStyled = styled.div<IStyle>(({ color }) => ({
  h5: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 8,
    letterSpacing: '0.2px',
    textTransform: 'uppercase',
    color: color
  }
}))


export const MenuMobileItemStyled = styled.div<IStyle>(({ color }) => ({
  a: {
    color: color,
    display: "flex",
    alignItems: "center",
    height: 36,
    borderRadius: Radius.blunt,
    cursor: "pointer",
    span: {
      paddingLeft: 8,
    },
    img: {
      width: 18,
    },
  }
}))


export const MenuMobileItemLeft = styled.div({
  display: "flex",
  alignItems: "center",
})

export const MenuMobileItemRight = styled.div({
  marginLeft: "auto"
})
