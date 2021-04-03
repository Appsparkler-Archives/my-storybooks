import { firestoreReducer } from "redux-firestore";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
});

const store = createStore(rootReducer, {});

export default store;
