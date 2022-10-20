import styled from '@emotion/styled';
import { space } from 'styled-system';
import Color from '../../../themes/Color';
import { IForm, IFormItem } from './Form.types';

export const FormStyled = styled.form<IForm>(({ layout, formWidth = '200px 386px' }) => {
  let cssTmp: object = {
    position: 'relative',
    fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
    '& > * + *': {
      marginTop: 16,
    },
  };
  if (layout === 'vertical') {
    cssTmp = {
      ...cssTmp,
      '& .label-item': {
        paddingBottom: 4,
      },
    };
  } else {
    cssTmp = {
      ...cssTmp,
      '& .form-item': {
        gridTemplateColumns: formWidth,
        gap: 32,
      },
      '& .label-item': {
        textAlign: 'right',
        minHeight: 32,
        paddingTop: 6,
      },
    };
  }
  return { ...cssTmp };
}, space);

export const FormItemStyled = styled.div<IFormItem>(({ isInvalid, formWidth }) => ({
  position: 'relative',
  display: 'grid',
  p: {
    margin: 0,
  },
  ...(isInvalid && {
    color: Color.danger.default,
  }),
  ...(formWidth && {
    gridTemplateColumns: `${formWidth} !important`,
  }),
}));

export const Label = styled.div({
  fontWeight: 600,
  display: 'block',
  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
});

export const Extra = styled.span({
  fontSize: 12,
  color: Color.font.pencil,
});

export const Help = styled.span({
  fontSize: 12,
  color: Color.font.pencil,
  marginLeft: 'auto',
  '& > span': {
    color: Color.font.ink,
  },
});

export const Additional = styled.div({
  marginTop: 4,
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 767.98px)': {
    display: 'block',
  },
});

export const InvalidText = styled.div({
  fontSize: 12,
  color: Color.lava[500],
});

export const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const Content = styled.div<IFormItem>(({ isColumn }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  width: "100%",
  ...isColumn && {
    flexDirection: "column",
    alignItems: "flex-start",
  }
}));

export const Req = styled.span({
  color: Color.danger.default,
  fontSize: 12,
});

export const FormActionStyled = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: 56,
  "& > * + *": {
    marginLeft: 8
  }
});

