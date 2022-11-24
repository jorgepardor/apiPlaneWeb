import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import Home from "./pages/home";
import store from "./redux/store";
import Test from "./pages/test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
      <Test />
    </Provider>
  </React.StrictMode>
);
