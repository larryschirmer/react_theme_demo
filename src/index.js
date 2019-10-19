import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./index.style";
import configureStore from "./store";
import { App } from "./components";
import { light, dark } from "./themes";

const Body = () => {
  const themeName = useSelector(({ theme }) => theme.name);

  return (
    <ThemeProvider theme={{ light, dark }[themeName]}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <Body />
  </Provider>,
  document.getElementById("root")
);
