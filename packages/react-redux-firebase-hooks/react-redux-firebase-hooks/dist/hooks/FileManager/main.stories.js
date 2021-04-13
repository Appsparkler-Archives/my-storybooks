"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _useFileManager2 = _interopRequireDefault(require("./useFileManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Story = {
  title: "Hooks/File Manager/useFileManager"
};
var _default = Story;
exports["default"] = _default;

var Template = function Template(_ref) {
  var collectionPath = _ref.collectionPath,
      storagePath = _ref.storagePath;

  var _useFileManager = (0, _useFileManager2["default"])({
    collectionPath: collectionPath,
    storagePath: storagePath,
    onCollectionPathError: console.error,
    onUploadError: console.error,
    onDownloadError: console.error,
    onRemoveError: console.error
  }),
      files = _useFileManager.files,
      uploadFiles = _useFileManager.uploadFiles,
      uploadingFileList = _useFileManager.uploadingFileList,
      downloadFile = _useFileManager.downloadFile,
      downloadingFileList = _useFileManager.downloadingFileList,
      removeFile = _useFileManager.removeFile,
      removingFileList = _useFileManager.removingFileList; // The Hook
  // When user uploads a file with the file input


  var onChangeFileInput = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(evt) {
      var files;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              files = evt.target.files;
              _context.next = 3;
              return uploadFiles(files);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [uploadFiles]); // When user click on CTA to download a single file


  var onClickDownloadFile = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(evt) {
      var fileKey;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              fileKey = evt.target.dataset.key;
              _context2.next = 3;
              return downloadFile(files[fileKey].fullPath);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }(), [downloadFile, files]); // When use clicks on CTA to delete the file


  var onClickDeleteFile = _react["default"].useCallback( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(evt) {
      var fileKey;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              fileKey = evt.target.dataset.key;
              _context3.next = 3;
              return removeFile({
                filePath: files[fileKey].fullPath,
                docPath: "".concat(collectionPath, "/").concat(fileKey)
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }(), [files, removeFile, collectionPath]);

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, "Upload Files", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    multiple: true,
    onChange: onChangeFileInput
  })), /*#__PURE__*/_react["default"].createElement("pre", {
    style: {
      position: "fixed",
      padding: 10,
      right: 0,
      top: 0,
      background: "black",
      color: "yellow"
    }
  }, uploadingFileList.length ? "Uploading ".concat(uploadingFileList.length, " file(s)..") : null, downloadingFileList.length ? "Downloading ".concat(downloadingFileList.length, " file(s)...") : null, removingFileList.length ? "Removing ".concat(removingFileList.length, " file(s)...") : null), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Sr #"), /*#__PURE__*/_react["default"].createElement("th", null, "File Name"), /*#__PURE__*/_react["default"].createElement("th", null, "CTAs"))), /*#__PURE__*/_react["default"].createElement("tbody", null, files && Object.entries(files).map(function (_ref5, idx) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        file = _ref6[1];

    return file ? /*#__PURE__*/_react["default"].createElement("tr", {
      key: key
    }, /*#__PURE__*/_react["default"].createElement("td", null, idx + 1), /*#__PURE__*/_react["default"].createElement("td", null, file.name), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      "data-key": key,
      disabled: downloadingFileList.some(function (filePath) {
        return filePath === file.fullPath;
      }),
      onClick: onClickDownloadFile
    }, "Download/Open"), "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      "data-key": key,
      onClick: onClickDeleteFile,
      disabled: removingFileList.some(function (rFile) {
        return rFile.filePath === file.fullPath;
      })
    }, "Delete File"))) : null;
  }))), /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify({
    uploadingFileList: uploadingFileList
  }, null, 2)), /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify({
    downloadingFileList: downloadingFileList
  }, null, 2)), /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify({
    removingFileList: removingFileList
  }, null, 2)));
};

Template.args = {
  collectionPath: "my-uploaded-files",
  storagePath: ""
};
var Example = Template.bind({});
exports.Example = Example;
Example.args = _objectSpread({}, Template.args);