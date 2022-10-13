import { Global, ThemeProvider } from '@emotion/react';
import React, { FC } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

const GlobalStyle = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'ika-icons';
        src: url('https://static.bmdstatic.com/gk/fonts/ika-icons.eot?nlpojv');
        src: url('https://static.bmdstatic.com/gk/fonts/ika-icons.eot?nlpojv#iefix')
            format('embedded-opentype'),
          url('https://static.bmdstatic.com/gk/fonts/ika-icons.ttf?nlpojv')
            format('truetype'),
          url('https://static.bmdstatic.com/gk/fonts/ika-icons.woff?nlpojv')
            format('woff'),
          url('https://static.bmdstatic.com/gk/fonts/ika-icons.svg?nlpojv#ika-icons')
            format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }
      [class^='icon-'],
      [class*=' icon-'] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'ika-icons' !important;
        speak: never;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      `}
  />
);

const theme = {
  colors: {
    primary: 'hotpink',
  },
};

export const Theme: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer
        transition={Slide}
        autoClose={30000000}
        pauseOnFocusLoss={false}
        hideProgressBar
        newestOnTop
        icon={false}
      />
      {children}
    </ThemeProvider>
  );
};
