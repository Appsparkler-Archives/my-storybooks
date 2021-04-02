'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _reactRedux = require('react-redux');

const _reactReduxFirebase = require('react-redux-firebase');

const useFirestoreCollection = function useFirestoreCollection(_ref) {
  const collectionPath = _ref.collectionPath;
  const onError = _ref.onError;
  const numberOfSegments = collectionPath.split('/').filter(Boolean).length;
  const isEven = numberOfSegments % 2 === 0;

  if (isEven) {
    const error = new Error('Collection path segments should be odd!');
    onError(error);
    throw error;
  }

  (0, _reactReduxFirebase.useFirestoreConnect)(function() {
    return [{
      collection: collectionPath,
    }];
  });

  const selector = function selector(_ref2) {
    const data = _ref2.firestore.data;
    return data[collectionPath];
  };

  const collection = (0, _reactRedux.useSelector)(selector);
  return collection;
};

const _default = useFirestoreCollection;
exports['default'] = _default;
