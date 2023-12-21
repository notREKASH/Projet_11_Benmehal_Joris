import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

// Redux

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./reducers";

// Store

const store = configureStore({
  reducer: rootreducer,
  devTools: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
