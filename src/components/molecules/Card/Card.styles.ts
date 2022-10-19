import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Shadow from '../../../themes/Shadow';
import { ICard } from './Card.types';

const bodySizeProps = {
  sm: {
    padding: 16,
  },
  md: {
    padding: 24,
  },
  lg: {
    padding: 32,
  },
};

const sizeProps = {
  sm: {
    padding: '8px 16px',
  },
  md: {
    padding: '16px 24px',
  },
  lg: {
    padding: '24px 32px',
  },
};

export const CardStyled = styled.div({
  borderRadius: Radius.dull,
  backgroundColor: Color.light,
  boxShadow: Shadow.hover,
  fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
});

export const CardHeaderStyled = styled.div<ICard>(({ size = 'md' }) => ({
  ...sizeProps[size],
  borderBottom: `1px solid ${Color.slate[200]}`,
  display: 'flex',
  alignItems: 'center',
}));

export const CardBody = styled.div<ICard>(({ size = 'md' }) => ({
  ...bodySizeProps[size],
  '& > p + p': {
    marginTop: 16,
  },
}));

export const CardFooterStyled = styled.div<ICard>(({ size = 'md' }) => ({
  ...sizeProps[size],
  borderTop: `1px solid ${Color.slate[200]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& > * + *': {
    marginLeft: 8,
  },
}));

export const Title = styled.div({
  fontWeight: 600,
  fontSize: 16,
});

export const Extra = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  '& > * + *': {
    marginLeft: 8,
  },
});
