import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

export default () => injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 2em;
  }

  h1, h2, h3, h4, h5 {
    font-family: "Roboto", sans-serif;
    line-height: 1em;
  }

  h2 {
    font-size: 22px;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: 'mohavebold';
    src: url('/fonts/mohave-bold-webfont.woff2') format('woff2'),
      url('/fonts/mohave-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mohavebold_italic';
    src: url('/fonts/mohave-bolditalic-webfont.woff2') format('woff2'),
      url('/fonts/mohave-bolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mohaveitalic';
    src: url('/fonts/mohave-italic-webfont.woff2') format('woff2'),
      url('/fonts/mohave-italic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mohavelight';
    src: url('/fonts/mohave-light-webfont.woff2') format('woff2'),
      url('/fonts/mohave-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mohavelight_italic';
    src: url('/fonts/mohave-lightitalic-webfont.woff2') format('woff2'),
      url('/fonts/mohave-lightitalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mohavemedium';
    src: url('/fonts/mohave-medium-webfont.woff2') format('woff2'),
      url('/fonts/mohave-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mohavemedium_italic';
    src: url('/fonts/mohave-mediumitalic-webfont.woff2') format('woff2'),
      url('/fonts/mohave-mediumitalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mohaveregular';
    src: url('/fonts/mohave-regular-webfont.woff2') format('woff2'),
      url('/fonts/mohave-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`
