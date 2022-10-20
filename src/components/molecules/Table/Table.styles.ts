import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import { IStyle } from './Table.types';

const tdAlignProps = {
  top: {
    verticalAlign: 'top',
  },
  bottom: {
    verticalAlign: 'bottom',
  },
  middle: {
    verticalAlign: 'middle',
  },
};

export const TableStyled = styled.table<IStyle>(
  ({ layout = 'middle', isPagination, isStipred }) => ({
    borderCollapse: 'collapse',
    width: '100%',
    minWidth: '100%',
    tableLayout: 'fixed',
    '& td': {
      padding: '12px 16px',
      ...tdAlignProps[layout],
      borderTop: `1px solid ${Color.slate[200]}`,
      fontSize: 14,
      textAlign: 'left',
      position: 'relative',
      wordBreak: 'break-word',
      backgroundColor: Color.light,
    },
    '& .action-absolute': {
      display: 'none',
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: Color.sky[50],
      button: {
        borderRadius: Radius.circle,
        boxShadow: 'none',
        background: 'none',
        '&:hover': {
          boxShadow: 'none',
          background: Color.sky[100],
          color: Color.sky[500],
        },
      },
    },
    '& .between': {
      display: 'flex',
      alignItems: 'center',
      '& > span': {
        '& + div': {
          marginLeft: 8,
        },
      },
    },
    '& .column-right': {
      textAlign: 'right',
      '& > *': {
        '& + *': {
          marginLeft: 8,
        },
      },
    },
    '& .column-center': {
      textAlign: 'center',
      '& > *': {
        '& + *': {
          marginLeft: 8,
        },
      },
    },
    '& .column-left': {
      textAlign: 'left',
      '& > *': {
        '& + *': {
          marginLeft: 8,
        },
      },
    },
    '& th': {
      fontWeight: 600,
      padding: '12px 16px',
      verticalAlign: 'middle',
      fontSize: 14,
      textAlign: 'left',
      wordBreak: 'break-word',
      backgroundColor: Color.light,
      '& .req': {
        color: Color.lava[500],
      },
      '& .sort': {
        '&:hover': {
          cursor: 'pointer',
        },
        float: 'right',
        color: Color.slate[500],
      },
    },
    '& .row-selection': {
      '& > div': {
        display: 'flex',
      },
    },
    '& tbody tr': {
      '&:last-of-type td': {
        borderBottom: isPagination ? `1px solid ${Color.slate[200]}` : undefined,
      },
      '&:hover': {
        '& td': {
          backgroundColor: Color.sky[50],
        },
        '& .action-absolute': {
          display: 'block',
        },
      },
    },

    ...(isStipred && {
      '& tbody tr:nth-of-type(odd) td': {
        backgroundColor: Color.slate[50],
      },
      '& tbody tr:nth-of-type(odd):hover td': {
        backgroundColor: Color.sky[50],
      },
    }),
  }),
);

export const TableWrapper = styled.div<IStyle>(({ isEmpty }) => ({
  borderBottom: `1px solid ${Color.slate[200]}`,
  borderTop: `1px solid ${Color.slate[200]}`,
  borderBottomLeftRadius: Radius.dull,
  borderBottomRightRadius: Radius.dull,
  fontFfamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
  ...(isEmpty && {
    borderBottom: 0,
  }),
}));

export const TableScroll = styled.div({
  overflow: 'auto',
  borderBottomLeftRadius: Radius.dull,
  borderBottomRightRadius: Radius.dull,
});

export const PaginationStyled = styled.div({
  padding: '12px 16px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 14,
  backgroundColor: Color.light,
  borderBottomLeftRadius: Radius.dull,
  borderBottomRightRadius: Radius.dull,
  '@media(max-width: 767.98px)': {
    display: 'block',
    borderTop: `1px solid ${Color.slate[200]}`,
    '& > * + *': {
      marginTop: 8,
      paddingLeft: '0 !important',
    },
  },
});

export const ShowItem = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& + div': {
    paddingLeft: 32,
  },
  '& > span': {
    paddingRight: 8,
    '& + div': {
      width: '80px !important',
    },
  },
});

export const RecordInfo = styled.div({
  position: 'relative',
});

export const Pagination = styled.div({
  display: 'flex',
  alignItems: 'center',
  button: {
    '& + button': {
      marginLeft: 8,
    },
  },
});

export const PaginationTotal = styled.div({
  marginRight: 8,
  display: 'flex',
  alignItems: 'center',
  '& > div': {
    flex: 1,
  },
  span: {
    paddingLeft: 8,
  },
});

export const EmptyBlockStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 200,
  padding: 32,
});
