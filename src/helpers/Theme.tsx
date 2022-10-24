import { Global, ThemeProvider } from '@emotion/react';
import React, { FC, ReactNode } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

const GlobalStyle = () => (
  <Global
    styles={`

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
        margin: 0;
        padding: 0;
        background: #ffffff;
        color: #121212;
        font-size: 14px;
        line-height: 1.5;
      }
    
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    
      a {
        color: #2f78cf;
        text-decoration: none;
      }
    
      ul[class],
      ol[class] {
        padding: 0;
      }
    
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      p,
      ul[class],
      ol[class],
      li,
      figure,
      figcaption,
      blockquote,
      dl,
      dd {
        margin: 0;
        font-weight: 400;
      }
      @font-face {
        font-family: geomanistbook;
        src: url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-book-webfont.eot);
        src: url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-book-webfont.eot?#iefix)
            format('embedded-opentype'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-book-webfont.woff2)
            format('woff2'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-book-webfont.woff)
            format('woff'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-book-webfont.ttf)
            format('truetype'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-book-webfont.svg#geomanistbook)
            format('svg');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: geomanistmedium;
        src: url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-medium-webfont.eot);
        src: url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-medium-webfont.eot?#iefix)
            format('embedded-opentype'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-medium-webfont.woff2)
            format('woff2'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-medium-webfont.woff)
            format('woff'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-medium-webfont.ttf)
            format('truetype'),
          url(https://static.bmdstatic.com/sf/assets/fonts/geomanist/geomanist-medium-webfont.svg#geomanistmedium)
            format('svg');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
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

interface ITheme {
  children?: ReactNode
}

export const Theme: FC<ITheme> = ({ children }) => {
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
