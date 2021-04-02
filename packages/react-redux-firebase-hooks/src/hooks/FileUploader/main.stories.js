import React from "react";
import useFileUploader from "./useFileUploader";

const Story = {
  title: "Hooks/File Manager/useFileUploader",
};

export default Story;

const Template = ({
  storagePath = "uploadedFiles",
  onError = () => null,
  collectionPath = "unnamed-collection",
}) => {
  const { uploadFiles, uploadingFileList } = useFileUploader({
    onError: (err) => console.error(err),
    storagePath,
    collectionPath,
  });
  const onChange = React.useCallback(
    (evt) => {
      const { files } = evt.target;
      uploadFiles(files);
    },
    [uploadFiles]
  );
  return (
    <div>
      <input type="file" onChange={onChange} multiple />
      <pre>{JSON.stringify({ uploadingFileList }, null, 2)}</pre>
    </div>
  );
};
Template.args = {
  storagePath: "new-storage-path/abcd-xyz",
  collectionPath: "my-super-storage-files",
};

export const Example = Template.bind({});
Example.args = {
  ...Template.args,
};
