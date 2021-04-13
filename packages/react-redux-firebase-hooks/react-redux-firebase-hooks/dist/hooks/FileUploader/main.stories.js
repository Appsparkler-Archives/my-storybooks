"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _useFileUploader2 = _interopRequireDefault(require("./useFileUploader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Story = {
  title: "Hooks/File Manager/useFileUploader"
};
var _default = Story;
exports["default"] = _default;

var Template = function Template(_ref) {
  var _ref$storagePath = _ref.storagePath,
      storagePath = _ref$storagePath === void 0 ? "uploadedFiles" : _ref$storagePath,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? function () {
    return null;
  } : _ref$onError,
      _ref$collectionPath = _ref.collectionPath,
      collectionPath = _ref$collectionPath === void 0 ? "unnamed-collection" : _ref$collectionPath;

  var _useFileUploader = (0, _useFileUploader2["default"])({
    onError: function onError(err) {
      return console.error(err);
    },
    storagePath: storagePath,
    collectionPath: collectionPath
  }),
      uploadFiles = _useFileUploader.uploadFiles,
      uploadingFileList = _useFileUploader.uploadingFileList;

  var onChange = _react["default"].useCallback(function (evt) {
    var files = evt.target.files;
    uploadFiles(files);
  }, [uploadFiles]);

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    onChange: onChange,
    multiple: true
  }), /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify({
    uploadingFileList: uploadingFileList
  }, null, 2)));
};

Template.args = {
  storagePath: "new-storage-path/abcd-xyz",
  collectionPath: "my-super-storage-files"
};
var Example = Template.bind({});
exports.Example = Example;
Example.args = _objectSpread({}, Template.args);