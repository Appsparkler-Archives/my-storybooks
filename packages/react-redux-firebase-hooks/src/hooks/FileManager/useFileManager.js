import useFileUploader from '../FileUploader/useFileUploader';
import useFirestoreCollection from '../FirestoreCollection/useFirestoreCollection';
import useFileRemover from '../FileRemover/useFileRemover';
import useFileDownloader from '../FileDownloader/useFileDownloader';

const useFileManager = ({
  collectionPath,
  storagePath,
  onCollectionPathError = () => null,
  onUploadError = () => null,
  onDownloadError = () => null,
  onRemoveError = () => null,
} = {}) => {
  const {uploadFiles, uploadingFileList} = useFileUploader({
    collectionPath,
    storagePath,
    onError: onUploadError,
  });

  const files = useFirestoreCollection({
    collectionPath,
    onError: onCollectionPathError,
  });

  const {downloadFile, downloadingFileList} = useFileDownloader(
      onDownloadError,
  );

  const {removeFile, removingFileList} = useFileRemover({
    onError: onRemoveError,
  });

  return {
    // list of files in database
    files,

    // uploading files
    uploadingFileList,
    uploadFiles,

    // downloading files
    downloadFile,
    downloadingFileList,

    // removing files
    removeFile,
    removingFileList,
  };
};

export default useFileManager;
