import React from 'react'
import useFileDownloader from './useFileDownloader'

const Story = {
  title: 'Hooks/File Manager/useFileDownloader',
}

export default Story

const Template = ({ filePath }) => {
  const { downloadFile, downloadingFileList } = useFileDownloader(console.error)
  const onClick = React.useCallback(async () => {
    await downloadFile(filePath)
  }, [downloadFile, filePath])
  return (
    <div>
      <button onClick={onClick} disabled={downloadingFileList.length}>
        {downloadingFileList.length
          ? `Downloading ${downloadingFileList.length} file...`
          : 'Open/Download File'}
      </button>
      <pre>{JSON.stringify({ downloadingFileList }, null, 2)}</pre>
    </div>
  )
}
Template.args = {
  filePath: 'uploadedFiles/522d2ac7-8e30-4c48-8747-41ca37bb76d7-env-with-auth',
}

export const Example = Template.bind({})
Example.args = {
  ...Template.args,
}
