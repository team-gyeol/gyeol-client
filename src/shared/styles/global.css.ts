import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

globalStyle(':root', {
  vars: {
    '--width': '100vw',
    '--height': '100vh',
  },
});

globalStyle('html, body', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: themeVars.width.full,
  margin: '0',
  padding: '0',
  fontSize: '62.5%',
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
  fontFamily: `'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif`,
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

export const rootStyle = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  minHeight: '100vh',
  width: 'var(--width)',
  backgroundColor: themeVars.color.bg_white100,
  color: themeVars.color.gray900,
});
