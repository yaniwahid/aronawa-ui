import styled from '@emotion/styled';

interface IEllipsis {
  line: number;
  fontSize: number;
  as?: React.ElementType<any>;
  minHeight?: boolean;
}

const Ellipsis = styled.div<IEllipsis>(({ fontSize = 14, line = 1, minHeight }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: line,
  WebkitBoxOrient: 'vertical',
  lineHeight: 1.5,
  maxHeight: fontSize * 1.5 * line,
  minHeight: minHeight ? undefined : fontSize * 1.5 * line,
  fontSize: fontSize,
  whiteSpace: 'normal',
}));

export default Ellipsis;
