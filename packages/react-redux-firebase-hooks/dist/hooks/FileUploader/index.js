'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _useFileUploader2 = _interopRequireDefault(require('./useFileUploader'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const FileUploader = function FileUploader(_ref) {
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
  const isUploading = _useFileUploader.isUploading;

  const onChange = _react['default'].useCallback(function(evt) {
    const files = evt.target.files;
    uploadFiles(files);
  }, [uploadFiles]);

  return /* #__PURE__*/_react['default'].createElement('div', null, /* #__PURE__*/_react['default'].createElement('input', {
    type: 'file',
    onChange: onChange,
  }), isUploading && 'Uploading...');
};

const _default = /* #__PURE__*/_react['default'].memo(FileUploader);

exports['default'] = _default;
