import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CryptoContext from "./CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
