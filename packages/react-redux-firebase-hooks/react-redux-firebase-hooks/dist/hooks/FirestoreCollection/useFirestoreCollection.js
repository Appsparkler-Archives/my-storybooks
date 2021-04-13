"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _reactReduxFirebase = require("react-redux-firebase");

var useFirestoreCollection = function useFirestoreCollection(_ref) {
  var collectionPath = _ref.collectionPath,
      onError = _ref.onError;
  var numberOfSegments = collectionPath.split("/").filter(Boolean).length;
  var isEven = numberOfSegments % 2 === 0;

  if (isEven) {
    var error = new Error("Collection path segments should be odd!");
    onError(error);
    throw error;
  }

  (0, _reactReduxFirebase.useFirestoreConnect)(function () {
    return [{
      collection: collectionPath
    }];
  });

  var selector = function selector(_ref2) {
    var data = _ref2.firestore.data;
    return data[collectionPath];
  };

  var collection = (0, _reactRedux.useSelector)(selector);
  return collection;
};

var _default = useFirestoreCollection;
exports["default"] = _default;