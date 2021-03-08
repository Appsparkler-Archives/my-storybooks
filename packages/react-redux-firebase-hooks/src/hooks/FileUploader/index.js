import React from 'react'
import useFileUploader from './useFileUploader'

const FileUploader = ({
  storagePath = 'uploadedFiles',
  onError = () => null,
  collectionPath = 'unnamed-collection',
}) => {
  const { uploadFiles, isUploading } = useFileUploader({
    onError: (err) => console.error(err),
    storagePath,
    collectionPath,
  })
  const onChange = React.useCallback(
    (evt) => {
      const { files } = evt.target
      uploadFiles(files)
    },
    [uploadFiles]
  )
  return (
    <div>
      <input type="file" onChange={onChange} />
      {isUploading && 'Uploading...'}
    </div>
  )
}

export default React.memo(FileUploader)
