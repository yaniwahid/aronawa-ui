import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Shadow from '../../../themes/Shadow';

export const ColorpickerStyled = styled.div({
  width:"100%",
  "[x-placement^='bottom'] [data-arrow]:before": {
    borderBottomColor: Color.slate[100]
  },
  "& > div": {
    boxShadow: Shadow.hover,
    border: 0,
    "& > div + div > div": {
      fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
      "& input": {
        border: `1px solid ${Color.slate[500]}`,
        borderRadius: Radius.blunt,
        fontSize: 12,
        padding: 4,
        fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
        "&+ div": {
          fontWeight: 600,
          textTransform: "uppercase",
        }
      }
    },
    "& + span": {
      height: 32,
      border: `1px solid ${Color.slate[500]}`,
      width: '100%',
      padding: "4px 8px",
      "& > span": {
        borderRadius: Radius.blunt,
        border: `1px solid ${Color.slate[500]}`,
      }
    }
  }
});