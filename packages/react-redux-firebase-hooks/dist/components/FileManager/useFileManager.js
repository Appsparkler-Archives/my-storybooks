'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _useFileUploader2 = _interopRequireDefault(require('../FileUploader/useFileUploader'));

const _useFirestoreCollection = _interopRequireDefault(require('../FirestoreCollection/useFirestoreCollection'));

const _useFileRemover2 = _interopRequireDefault(require('../FileRemover/useFileRemover'));

const _useFileDownloader2 = _interopRequireDefault(require('../FileDownloader/useFileDownloader'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const useFileManager = function useFileManager() {
  const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const collectionPath = _ref.collectionPath;
  const storagePath = _ref.storagePath;
  const _ref$onCollectionPath = _ref.onCollectionPathError;
  const onCollectionPathError = _ref$onCollectionPath === void 0 ? function() {
    return null;
  } : _ref$onCollectionPath;
  const _ref$onUploadError = _ref.onUploadError;
  const onUploadError = _ref$onUploadError === void 0 ? function() {
    return null;
  } : _ref$onUploadError;
  const _ref$onDownloadError = _ref.onDownloadError;
  const onDownloadError = _ref$onDownloadError === void 0 ? function() {
    return null;
  } : _ref$onDownloadError;
  const _ref$onRemoveError = _ref.onRemoveError;
  const onRemoveError = _ref$onRemoveError === void 0 ? function() {
    return null;
  } : _ref$onRemoveError;

  const _useFileUploader = (0, _useFileUploader2['default'])({
    collectionPath: collectionPath,
    storagePath: storagePath,
    onError: onUploadError,
  });
  const uploadFiles = _useFileUploader.uploadFiles;
  const uploadingFileList = _useFileUploader.uploadingFileList;

  const files = (0, _useFirestoreCollection['default'])({
    collectionPath: collectionPath,
    onError: onCollectionPathError,
  });

  const _useFileDownloader = (0, _useFileDownloader2['default'])(onDownloadError);
  const downloadFile = _useFileDownloader.downloadFile;
  const downloadingFileList = _useFileDownloader.downloadingFileList;

  const _useFileRemover = (0, _useFileRemover2['default'])({
    onError: onRemoveError,
  });
  const removeFile = _useFileRemover.removeFile;
  const removingFileList = _useFileRemover.removingFileList;

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
    removingFileList: removingFileList,
  };
};

const _default = useFileManager;
exports['default'] = _default;
