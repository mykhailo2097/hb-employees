import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { UsersProvider } from "./context/UsersContext";

ReactDOM.render(
  <BrowserRouter>
    <UsersProvider>
      <App />
    </UsersProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
