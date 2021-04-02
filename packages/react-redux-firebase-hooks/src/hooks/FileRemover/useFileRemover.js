import React from "react";
import { useFirebase } from "react-redux-firebase";

const useFileRemover = (onError) => {
  const [{ removingFileList }, setState] = React.useState({
    removingFileList: [],
  });

  const firebase = useFirebase();

  const removeFile = React.useCallback(
    async ({ filePath, docPath }) => {
      try {
        setState((currentState) => ({
          ...currentState,
          removingFileList: (() => {
            const updatedFiles = [...currentState.removingFileList];
            updatedFiles.push({ docPath, filePath });
            return updatedFiles;
          })(),
        }));
        await firebase.deleteFile(filePath, docPath);
      } catch (e) {
        onError(e);
      } finally {
        setState((currentState) => ({
          ...currentState,
          removingFileList: (() => {
            return [
              ...currentState.removingFileList.filter((obj) => {
                return obj.docPath !== docPath && obj.filePath !== filePath;
              }),
            ];
          })(),
        }));
      }
    },
    [firebase, onError]
  );

  return {
    removeFile,
    removingFileList,
  };
};

export default useFileRemover;
