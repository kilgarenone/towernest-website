import { injectGlobal } from "react-emotion";

injectGlobal`
  /* Font face typography */
  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Inter UI"), url("./fonts/Inter-UI-Regular.woff2") format("woff2"),
      url("./fonts/Inter-UI-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("Inter UI"), url("./fonts/Inter-UI-Medium.woff2") format("woff2"),
      url("./fonts/Inter-UI-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Inter UI"), url("./fonts/Inter-UI-Bold.woff2") format("woff2"),
      url("./fonts/Inter-UI-Bold.woff") format("woff");
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-family: "Inter UI", "Helvetica Neue", HelveticaNeue, Helvetica, Arial,
      sans-serif, sans-serif;
    font-size: 1.125em;
    font-style: normal;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    line-height: 1.5;
    word-wrap: break-word;
    color: rgba(0,0,0,.84);
  }

  /* body {
    max-width: 100%;
    overflow-x: hidden;
  } */

  /* CSS Reset */
  blockquote, body, dd, dl, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, legend, ol, p, pre, ul {
    margin: 0;
    padding: 0;
  }

  main,
  li {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
`;
