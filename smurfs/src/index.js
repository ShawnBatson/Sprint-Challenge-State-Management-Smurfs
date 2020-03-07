import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { SmurfReducer } from "./components/reducers/SmurfReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(SmurfReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
