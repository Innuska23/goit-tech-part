import { css } from '@emotion/react';

import {theme} from './constants'
export const globalStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: 'Manrope', sans-serif;
    //font-family: 'Inter', sans-serif;
    //font-family: 'Montserrat', sans-serif;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.grey1};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.white};
  }
`;
