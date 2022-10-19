import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IAlert } from './Alert.types';

const Colors = Color as any;

const Solid = (color: any) => {
  return {
    backgroundColor: Colors[color]['lightest'],
    borderColor: Colors[color]['subtle'],
    'h4, i': {
      color: Colors[color]['default'],
    },
  };
};

export const AlertStyled = styled.div<IAlert>(({ color }) => ({
  padding: 16,
  fontSize: 14,
  border: '1px solid transparent',
  color: Color.font.ink,
  position: 'relative',
  wordWrap: 'break-word',
  lineHeight: 1.5,
  borderRadius: Radius.dull,
  display: 'flex',
  alignItems: 'flex-start',
  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
  ...Solid(color),
  p: {
    ' & + p': {
      marginTop: 16,
    },
  },
}));

export const Close = styled.button({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  lineHeight: '20px',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  padding: 0,
  marginLeft: 8,
});

export const Title = styled.h4({
  textTransform: 'uppercase',
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 4,
});

export const IconWrapper = styled.div({
  marginRight: 8,
  position: 'relative',
  top: 1,
});
