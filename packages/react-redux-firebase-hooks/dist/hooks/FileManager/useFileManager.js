"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useFileUploader2 = _interopRequireDefault(require("../FileUploader/useFileUploader"));

var _useFirestoreCollection = _interopRequireDefault(require("../FirestoreCollection/useFirestoreCollection"));

var _useFileRemover2 = _interopRequireDefault(require("../FileRemover/useFileRemover"));

var _useFileDownloader2 = _interopRequireDefault(require("../FileDownloader/useFileDownloader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFileManager = function useFileManager() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      collectionPath = _ref.collectionPath,
      storagePath = _ref.storagePath,
      _ref$onCollectionPath = _ref.onCollectionPathError,
      onCollectionPathError = _ref$onCollectionPath === void 0 ? function () {
    return null;
  } : _ref$onCollectionPath,
      _ref$onUploadError = _ref.onUploadError,
      onUploadError = _ref$onUploadError === void 0 ? function () {
    return null;
  } : _ref$onUploadError,
      _ref$onDownloadError = _ref.onDownloadError,
      onDownloadError = _ref$onDownloadError === void 0 ? function () {
    return null;
  } : _ref$onDownloadError,
      _ref$onRemoveError = _ref.onRemoveError,
      onRemoveError = _ref$onRemoveError === void 0 ? function () {
    return null;
  } : _ref$onRemoveError;

  var _useFileUploader = (0, _useFileUploader2["default"])({
    collectionPath: collectionPath,
    storagePath: storagePath,
    onError: onUploadError
  }),
      uploadFiles = _useFileUploader.uploadFiles,
      uploadingFileList = _useFileUploader.uploadingFileList;

  var files = (0, _useFirestoreCollection["default"])({
    collectionPath: collectionPath,
    onError: onCollectionPathError
  });

  var _useFileDownloader = (0, _useFileDownloader2["default"])(onDownloadError),
      downloadFile = _useFileDownloader.downloadFile,
      downloadingFileList = _useFileDownloader.downloadingFileList;

  var _useFileRemover = (0, _useFileRemover2["default"])({
    onError: onRemoveError
  }),
      removeFile = _useFileRemover.removeFile,
      removingFileList = _useFileRemover.removingFileList;

  return {
    // list of files in database
    files: files,
    // uploading files
    uploadingFileList: uploadingFileList,
    uploadFiles: uploadFiles,
    // downloading files
    downloadFile: downloadFile,
    downloadingFileList: downloadingFileList,
    // removing files
    removeFile: removeFile,
    removingFileList: removingFileList
  };
};

var _default = useFileManager;
exports["default"] = _default;