import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const ReduxProvider = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

export default ReduxProvider;
