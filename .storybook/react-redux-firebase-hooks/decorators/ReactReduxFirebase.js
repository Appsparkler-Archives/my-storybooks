// http://react-redux-firebase.com/docs/getting_started.html
import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import store from "./store";

const fbConfig = JSON.parse(process.env.STORYBOOK_FIREBASE_CONFIG);

// react-redux-firebase config
const rrfConfig = {
  useFirestoreForStorageMeta: true,
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const ReactReduxFirebaseDecorator = (Story) => (
  <ReactReduxFirebaseProvider {...rrfProps}>
    <Story />
  </ReactReduxFirebaseProvider>
);

export default ReactReduxFirebaseDecorator;
