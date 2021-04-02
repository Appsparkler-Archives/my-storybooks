import React from "react";
import useFileManager from "./useFileManager";

const Story = {
  title: "Hooks/File Manager/useFileManager",
};

export default Story;

const Template = ({ collectionPath, storagePath }) => {
  const {
    // list of files that are/will-be uploaded
    files,

    // uploading files info
    uploadFiles,
    uploadingFileList,

    // downloading files info
    downloadFile,
    downloadingFileList,

    // removing files info
    removeFile,
    removingFileList,
  } = useFileManager({
    collectionPath,
    storagePath,
    onCollectionPathError: console.error,
    onUploadError: console.error,
    onDownloadError: console.error,
    onRemoveError: console.error,
  }); // The Hook

  // When user uploads a file with the file input
  const onChangeFileInput = React.useCallback(
    async (evt) => {
      const { files } = evt.target;
      await uploadFiles(files);
    },
    [uploadFiles]
  );

  // When user click on CTA to download a single file
  const onClickDownloadFile = React.useCallback(
    async (evt) => {
      const { key: fileKey } = evt.target.dataset;
      await downloadFile(files[fileKey].fullPath);
    },
    [downloadFile, files]
  );

  // When use clicks on CTA to delete the file
  const onClickDeleteFile = React.useCallback(
    async (evt) => {
      const { key: fileKey } = evt.target.dataset;
      await removeFile({
        filePath: files[fileKey].fullPath,
        docPath: `${collectionPath}/${fileKey}`,
      });
    },
    [files, removeFile, collectionPath]
  );
  return (
    <div>
      <label>
        Upload Files
        <br />
        <input type="file" multiple onChange={onChangeFileInput} />
      </label>

      {
        <pre
          style={{
            position: "fixed",
            padding: 10,
            right: 0,
            top: 0,
            background: "black",
            color: "yellow",
          }}
        >
          {uploadingFileList.length
            ? `Uploading ${uploadingFileList.length} file(s)..`
            : null}
          {downloadingFileList.length
            ? `Downloading ${downloadingFileList.length} file(s)...`
            : null}
          {removingFileList.length
            ? `Removing ${removingFileList.length} file(s)...`
            : null}
        </pre>
      }

      <table>
        <thead>
          <tr>
            <th>Sr #</th>
            <th>File Name</th>
            <th>CTAs</th>
          </tr>
        </thead>
        <tbody>
          {files &&
            Object.entries(files).map(([key, file], idx) =>
              file ? (
                <tr key={key}>
                  <td>{idx + 1}</td>
                  <td>{file.name}</td>
                  <td>
                    <button
                      type="button"
                      data-key={key}
                      disabled={downloadingFileList.some(
                        (filePath) => filePath === file.fullPath
                      )}
                      onClick={onClickDownloadFile}
                    >
                      Download/Open
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      data-key={key}
                      onClick={onClickDeleteFile}
                      disabled={removingFileList.some(
                        (rFile) => rFile.filePath === file.fullPath
                      )}
                    >
                      Delete File
                    </button>
                  </td>
                </tr>
              ) : null
            )}
        </tbody>
      </table>

      <pre>{JSON.stringify({ uploadingFileList }, null, 2)}</pre>
      <pre>{JSON.stringify({ downloadingFileList }, null, 2)}</pre>
      <pre>{JSON.stringify({ removingFileList }, null, 2)}</pre>
    </div>
  );
};

Template.args = {
  collectionPath: "my-uploaded-files",
  storagePath: "",
};

export const Example = Template.bind({});
Example.args = {
  ...Template.args,
};
