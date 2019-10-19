import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,
  html {
    width: 100vw;
    height: 100vh;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
  }
  div {
    transition: background 0.25s, color 0.1s;
  }
  p {
    margin: 0;
    font-size: 1.8rem;
  }
`;

export default GlobalStyle;
