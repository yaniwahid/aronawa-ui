import styled from '@emotion/styled';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Shadow from '../../../themes/Shadow';

export const EditorStyled = styled.div({
  boxShadow: Shadow.platform,
  borderRadius: Radius.dull,
  paddingBottom: 1,
  borderTop: `1px solid ${Color.slate[200]}`,
  '.cke_reset_all, .cke_reset_all *, .cke_reset_all a, .cke_reset_all textarea': {
    fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`,
    color: Color.font.ink,
  },
  '.cke_chrome': { border: 0, borderRadius: Radius.dull },
  '.cke_bottom': { display: 'none' },
  '.cke_contents': {
    margin: 16,
    border: `1px solid ${Color.slate[500]}`,
    borderRadius: Radius.dull,
  },
  '.cke_top': {
    background: '#fff',
    borderBottomColor: Color.slate[200],
    borderTopLeftRadius: Radius.dull,
    borderTopRightRadius: Radius.dull,
  },
  '.cke_toolgroup > * + *': { marginLeft: 8 },
  '.cke_toolbox > * + *': { marginLeft: 16 },
  '.cke_toolgroup a.cke_button:last-child:after, .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after, .cke_toolgroup a.cke_button:hover:last-child:after, .cke_toolgroup a.cke_button:focus:last-child:after, .cke_toolgroup a.cke_button.cke_button_on:last-child:after':
    {
      right: -8,
    },
  'a.cke_button_off:hover': { cursor: 'pointer' },
  'a.cke_button_on, a.cke_button_off:hover, a.cke_button_off:focus, a.cke_button_off:active': {
    background: Color.slate[50],
    padding: '4px 6px',
    border: 0,
    borderRadius: Radius.dull,
    cursor: 'pointer',
  },
  '.cke_button_label': {
    cursor: 'pointer',
  },
  '.cke_inner': {
    borderRadius: Radius.dull,
  },
  'textarea.cke_source': {
    padding: '4px 8px',
  },
});
