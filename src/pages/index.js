import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "../pages/memory";

const rootElement = document.getElementById("game-container");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
