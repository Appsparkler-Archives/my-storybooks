'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Example = exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _useFileRemover2 = _interopRequireDefault(require('./useFileRemover'));

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
  title: 'Hooks/File Manager/useFileRemover',
};
const _default = Story;
exports['default'] = _default;

const Template = function Template(args) {
  const _args$filePath = args.filePath;
  const filePath = _args$filePath === void 0 ? '' : _args$filePath;
  const _args$docPath = args.docPath;
  const docPath = _args$docPath === void 0 ? 'uploaded-files' : _args$docPath;

  const _useFileRemover = (0, _useFileRemover2['default'])(console.error);
  const removeFile = _useFileRemover.removeFile;
  const removingFileList = _useFileRemover.removingFileList;

  const onClickRemoveFile = _react['default'].useCallback( /* #__PURE__*/function() {
    const _ref = _asyncToGenerator( /* #__PURE__*/regeneratorRuntime.mark(function _callee(evt) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return removeFile({
                filePath: filePath,
                docPath: docPath,
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function(_x) {
      return _ref.apply(this, arguments);
    };
  }(), [filePath, docPath, removeFile]);

  return /* #__PURE__*/_react['default'].createElement('button', {
    onClick: onClickRemoveFile,
    disabled: removingFileList.length,
    type: 'button',
  }, !removingFileList.length ? 'Remove File' : 'Removing '.concat(removingFileList.length, ' file(s)'));
};

Template.args = {
  filePath: '78575c8f-7ea5-4d2b-8e2a-99e768c0aed0-signature.svg',
  docPath: 'my-uploaded-files/6eOYT7uMlheF2DOxKnQW',
};
const Example = Template.bind({});
exports.Example = Example;
Example.args = _objectSpread({}, Template.args);
