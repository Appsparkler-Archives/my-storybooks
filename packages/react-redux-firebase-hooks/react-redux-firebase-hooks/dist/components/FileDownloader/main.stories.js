'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Example = exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _useFileDownloader2 = _interopRequireDefault(require('./useFileDownloader'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
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

const Story = {
  title: 'Hooks/File Manager/useFileDownloader',
};
const _default = Story;
exports['default'] = _default;

const Template = function Template(_ref) {
  const filePath = _ref.filePath;

  const _useFileDownloader = (0, _useFileDownloader2['default'])(console.error);
  const downloadFile = _useFileDownloader.downloadFile;
  const downloadingFileList = _useFileDownloader.downloadingFileList;

  const onClick = _react['default'].useCallback( /* #__PURE__*/_asyncToGenerator( /* #__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return downloadFile(filePath);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee);
  })), [downloadFile, filePath]);

  return /* #__PURE__*/_react['default'].createElement('div', null, /* #__PURE__*/_react['default'].createElement('button', {
    onClick: onClick,
    disabled: downloadingFileList.length,
  }, downloadingFileList.length ? 'Downloading '.concat(downloadingFileList.length, ' file...') : 'Open/Download File'), /* #__PURE__*/_react['default'].createElement('pre', null, JSON.stringify({
    downloadingFileList: downloadingFileList,
  }, null, 2)));
};

Template.args = {
  filePath: 'uploadedFiles/522d2ac7-8e30-4c48-8747-41ca37bb76d7-env-with-auth',
};
const Example = Template.bind({});
exports.Example = Example;
Example.args = _objectSpread({}, Template.args);
