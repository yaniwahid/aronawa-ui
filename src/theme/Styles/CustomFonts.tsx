import { Global } from '@emotion/react';

const CustomFonts = () => (
  <Global
    styles={`
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

export default CustomFonts;
