import {
  ReactReduxFirebase,
  ReduxProvider,
} from "../../packages/react-redux-firebase-hooks/storybbook-decorators";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    source: {
      type: "code",
    },
  },
};

export const decorators = [ReduxProvider, ReactReduxFirebase];
