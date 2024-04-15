import React from "react";
import ReactDOM from "react-dom/client";
import "@/scss/main.scss";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@/store";

import App from "@/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter
  basename={process.env.NODE_ENV === "production" ? "/portfolio/" : "/"}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
