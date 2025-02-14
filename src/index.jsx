import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import App from "./components/app";

import "./style.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <StrictMode>
    <App />
  </StrictMode>
);
