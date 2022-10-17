import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Shadow from '../../../themes/Shadow';

export const CarouselStyled = styled.div({
  div: {
    outline: 'none',
  },
  img: {
    width: '100%',
    maxWidth: '100%',
  },
  '.slick-list,.slick-slider,.slick-track': {
    position: 'relative',
    display: 'block',
  },
  '.slick-loading': {
    '.slick-slide': {
      '.slick-loading': {
        '.slick-track': {
          visibility: 'hidden',
        },
      },
    },
  },
  '.slick-slider': {
    boxSizing: 'border-box',
    userSelect: 'none',
    touchAction: 'pan-y',
    WebkitTouchCallout: 'none',
    KhtmlUserSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    '.slick-list': {
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      transform: 'translate3d(0,0,0)',
      '&:focus': {
        outline: 0,
      },
      '&.dragging': {
        cursor: 'hand',
      },
    },
    '.slick-track': {
      top: 0,
      left: 0,
      transform: 'translate3d(0,0,0)',
      '&:after,&:before': {
        display: 'table',
        content: '""',
      },
      '&:after': {
        clear: 'both',
      },
    },
  },
  '.slick-slide': {
    display: 'none',
    float: 'left',
    height: '100%',
    minHeight: 1,
    img: {
      display: 'block',
    },
    '&.slick-loading': {
      img: {
        display: 'none',
      },
    },
    '&.dragging': {
      img: {
        pointerEvents: 'none',
      },
    },
  },
  '.slick-initialized': {
    '.slick-slide': {
      display: 'block',
    },
  },
  '.slick-vertical': {
    '.slick-slide': {
      display: 'block',
      height: 'auto',
      border: '1px solid transparent',
    },
  },
  '.slick-arrow.slick-hidden': {
    display: 'none',
  },
  '.slick-dots,.slick-next,.slick-prev': {
    position: 'absolute',
    display: 'block',
    padding: 0,
  },
  '.slick-next,.slick-prev': {
    fontSize: 0,
    lineHeight: 0,
    top: '50%',
    width: 40,
    height: 40,
    transform: 'translate(0,-50%)',
    cursor: 'pointer',
    color: 'transparent',
    border: 'none',
    outline: 0,
  },
  '.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover': {
    color: 'transparent',
    outline: 0,
  },
  '.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before':
    {
      opacity: 1,
    },
  '.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before': {
    opacity: 0.25,
  },
  '.slick-next:before,.slick-prev:before': {
    fontSize: 20,
    lineHeight: 1,
    opacity: 0.75,
    color: Color.font.pencil,
  },
  '.slick-prev': {
    left: -16,
    right: 'auto',
    '&:before': {
      content: '"←"',
    },
  },
  '.slick-next': {
    left: 'auto',
    right: -16,
    '&:before': {
      content: '"→"',
    },
  },
  '.slick-dotted': {
    '&.slick-slider': {
      marginBottom: 30,
    },
  },
  '.slick-dots': {
    bottom: 16,
    left: 16,
    margin: 0,
    listStyle: 'none',
    textAlign: 'left',
    li: {
      display: 'inline-block',
      padding: 0,
      button: {
        border: 0,
        background: Color.light,
        borderRadius: Radius.circle,
        display: 'block',
        height: 8,
        width: 8,
        outline: 0,
        lineHeight: 0,
        fontSize: 0,
        color: 'transparent',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        opacity: 0.25,
        transition: ' width .2s,height .2s',
        '&:focus, &:hover': {
          outline: 0,
        },
      },
      '& + li': {
        marginLeft: 8,
      },
      '&.slick-active': {
        button: {
          width: 24,
          borderRadius: 25,
          opacity: 1,
        },
      },
    },
  },
});

export const Arrow = styled.div({
  borderRadius: Radius.circle,
  zIndex: 2,
  boxShadow: Shadow.platform,
  color: Color.font.ink,
  backgroundColor: Color.neutral.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  div: {
    width: '100%',
    height: '100%',
  },
  '&:hover': {
    boxShadow: Shadow.hover,
  },
  '&:before': {
    display: 'none',
  },
});
