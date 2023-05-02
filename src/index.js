import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  title: "Redax",
};

const action = {
  type: "CHANGE_TITLE",
  payload: {
    title: "Redax",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.payload.title,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
