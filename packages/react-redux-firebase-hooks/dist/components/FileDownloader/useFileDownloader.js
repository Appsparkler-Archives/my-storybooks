'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _reactReduxFirebase = require('react-redux-firebase');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object); if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    } keys.push.apply(keys, symbols);
  } return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  } return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  } return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg); var value = info.value;
  } catch (error) {
    reject(error); return;
  } if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    const self = this; const args = arguments; return new Promise(function(resolve, reject) {
      const gen = fn.apply(self, args); function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      } function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      } _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  } return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return; const _arr = []; let _n = true; let _d = false; let _e = undefined; try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value); if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true; _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  } return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

const useFileDownloader = function useFileDownloader() {
  const onError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function() {
    return null;
  };
  const firebase = (0, _reactReduxFirebase.useFirebase)();

  const _React$useState = _react['default'].useState({
    downloadingFileList: [],
  });
  const _React$useState2 = _slicedToArray(_React$useState, 2);
  const downloadingFileList = _React$useState2[0].downloadingFileList;
  const setState = _React$useState2[1];

  const downloadFile = _react['default'].useCallback( /* #__PURE__*/function() {
    const _ref = _asyncToGenerator( /* #__PURE__*/regeneratorRuntime.mark(function _callee(fullPath) {
      let storageRef; let downloadUrl;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setState(function(currentState) {
                return _objectSpread(_objectSpread({}, currentState), {}, {
                  downloadingFileList: function() {
                    const updatedList = _toConsumableArray(currentState.downloadingFileList);

                    updatedList.push(fullPath);
                    return updatedList;
                  }(),
                });
              });
              storageRef = firebase.storage().ref(fullPath);
              _context.next = 5;
              return storageRef.getDownloadURL();

            case 5:
              downloadUrl = _context.sent;
              Object.assign(document.createElement('a'), {
                target: '_blank',
                href: downloadUrl,
              }).click();
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);
              onError(_context.t0);

            case 12:
              _context.prev = 12;
              setState(function(currentState) {
                return _objectSpread(_objectSpread({}, currentState), {}, {
                  downloadingFileList: _toConsumableArray(currentState.downloadingFileList.filter(function(listFile) {
                    return listFile !== fullPath;
                  })),
                });
              });
              return _context.finish(12);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9, 12, 15]]);
    }));

    return function(_x) {
      return _ref.apply(this, arguments);
    };
  }(), [firebase, onError]);

  return {
    downloadingFileList: downloadingFileList,
    downloadFile: downloadFile,
  };
};

const _default = useFileDownloader;
exports['default'] = _default;
