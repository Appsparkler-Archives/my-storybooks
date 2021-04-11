'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Example = exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _useFileUploader2 = _interopRequireDefault(require('./useFileUploader'));

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

const Story = {
  title: 'Hooks/File Manager/useFileUploader',
};
const _default = Story;
exports['default'] = _default;

const Template = function Template(_ref) {
  const _ref$storagePath = _ref.storagePath;
  const storagePath = _ref$storagePath === void 0 ? 'uploadedFiles' : _ref$storagePath;
  const _ref$onError = _ref.onError;
  const onError = _ref$onError === void 0 ? function() {
    return null;
  } : _ref$onError;
  const _ref$collectionPath = _ref.collectionPath;
  const collectionPath = _ref$collectionPath === void 0 ? 'unnamed-collection' : _ref$collectionPath;

  const _useFileUploader = (0, _useFileUploader2['default'])({
    onError: function onError(err) {
      return console.error(err);
    },
    storagePath: storagePath,
    collectionPath: collectionPath,
  });
  const uploadFiles = _useFileUploader.uploadFiles;
  const uploadingFileList = _useFileUploader.uploadingFileList;

  const onChange = _react['default'].useCallback(function(evt) {
    const files = evt.target.files;
    uploadFiles(files);
  }, [uploadFiles]);

  return /* #__PURE__*/_react['default'].createElement('div', null, /* #__PURE__*/_react['default'].createElement('input', {
    type: 'file',
    onChange: onChange,
    multiple: true,
  }), /* #__PURE__*/_react['default'].createElement('pre', null, JSON.stringify({
    uploadingFileList: uploadingFileList,
  }, null, 2)));
};

Template.args = {
  storagePath: 'new-storage-path/abcd-xyz',
  collectionPath: 'my-super-storage-files',
};
const Example = Template.bind({});
exports.Example = Example;
Example.args = _objectSpread({}, Template.args);
