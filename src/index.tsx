import React from "react";
import ReactDOM from "react-dom";
import { CacheProvider } from "rest-hooks";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <CacheProvider>
        <App />
      </CacheProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
