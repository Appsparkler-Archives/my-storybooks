import React from "react";
import uuid from "uuid";
import { useFirebase } from "react-redux-firebase";

const useFileUploader = ({ storagePath, collectionPath, onError }) => {
  const [state, setState] = React.useState({
    uploadingFileList: [],
  });
  const firebase = useFirebase();
  const uploadFiles = React.useCallback(
    async (files) => {
      const filesWithUUID = [...files].map(
        (file) =>
          new File([file], `${uuid.v4()}-${file.name}`, { type: file.type })
      );
      setState((currentState) => ({
        ...currentState,
        uploadingFileList: (() => {
          return [
            ...currentState.uploadingFileList,
            ...filesWithUUID.map((file) => ({
              file,
              storagePath,
              collectionPath,
            })),
          ];
        })(),
      }));
      await firebase
        .uploadFiles(storagePath, filesWithUUID, collectionPath)
        .catch((error) => {
          onError(error);
        })
        .finally(() => {
          setState((currentState) => ({
            ...currentState,
            uploadingFileList: (() => {
              return currentState.uploadingFileList.filter((obj) => {
                return !filesWithUUID.some(
                  (fileWithUUID) => fileWithUUID.name === obj.file.name
                );
              });
            })(),
          }));
        });
    },
    [firebase, storagePath, onError, collectionPath]
  );
  return {
    ...state,
    uploadFiles,
  };
};

export default useFileUploader;
