"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _useFileUploader2 = _interopRequireDefault(require("./useFileUploader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FileUploader = function FileUploader(_ref) {
  var _ref$storagePath = _ref.storagePath,
      storagePath = _ref$storagePath === void 0 ? 'uploadedFiles' : _ref$storagePath,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? function () {
    return null;
  } : _ref$onError,
      _ref$collectionPath = _ref.collectionPath,
      collectionPath = _ref$collectionPath === void 0 ? 'unnamed-collection' : _ref$collectionPath;

  var _useFileUploader = (0, _useFileUploader2["default"])({
    onError: function onError(err) {
      return console.error(err);
    },
    storagePath: storagePath,
    collectionPath: collectionPath
  }),
      uploadFiles = _useFileUploader.uploadFiles,
      isUploading = _useFileUploader.isUploading;

  var onChange = _react["default"].useCallback(function (evt) {
    var files = evt.target.files;
    uploadFiles(files);
  }, [uploadFiles]);

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    onChange: onChange
  }), isUploading && 'Uploading...');
};

var _default = /*#__PURE__*/_react["default"].memo(FileUploader);

exports["default"] = _default;