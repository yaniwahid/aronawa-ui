import { Global, ThemeProvider } from '@emotion/react';
import React, { FC } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

const GlobalStyle = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'ikaicons';
        src: url('https://static.bmdstatic.com/gk/fonts/ikaicons/ikaicons.eot?8ipg14');
        src: url('https://static.bmdstatic.com/gk/fonts/ikaicons/ikaicons.eot?8ipg14#iefix') format('embedded-opentype'),
          url('https://static.bmdstatic.com/gk/fonts/ikaicons/ikaicons.ttf?8ipg14') format('truetype'),
          url('https://static.bmdstatic.com/gk/fonts/ikaicons/ikaicons.woff?8ipg14') format('woff'),
          url('https://static.bmdstatic.com/gk/fonts/ikaicons/ikaicons.svg?8ipg14#ikaicons') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }
    
      i {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'ikaicons' !important;
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
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 66, 72],
};

export const Theme: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer
        transition={Slide}
        autoClose={3000}
        pauseOnFocusLoss={false}
        hideProgressBar
        newestOnTop
        icon={false}
      />
      {children}
    </ThemeProvider>
  );
};
