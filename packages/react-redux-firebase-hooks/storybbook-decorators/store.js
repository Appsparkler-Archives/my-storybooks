import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { createStore, combineReducers, compose } from "redux";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
});

const store = createStore(rootReducer, {});

export default store;
