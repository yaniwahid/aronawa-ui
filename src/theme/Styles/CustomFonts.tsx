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
      `}
  />
);

export default CustomFonts;
