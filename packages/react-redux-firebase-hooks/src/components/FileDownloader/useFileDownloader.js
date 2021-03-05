import React from 'react'
import { useFirebase } from 'react-redux-firebase'

const useFileDownloader = (onError = () => null) => {
  const firebase = useFirebase()
  const [{ downloadingFileList }, setState] = React.useState({
    downloadingFileList: [],
  })
  const downloadFile = React.useCallback(
    async (fullPath) => {
      try {
        setState((currentState) => ({
          ...currentState,
          downloadingFileList: (() => {
            const updatedList = [...currentState.downloadingFileList]
            updatedList.push(fullPath)
            return updatedList
          })(),
        }))
        const storageRef = firebase.storage().ref(fullPath)
        const downloadUrl = await storageRef.getDownloadURL()
        Object.assign(document.createElement('a'), {
          target: '_blank',
          href: downloadUrl,
        }).click()
      } catch (e) {
        onError(e)
      } finally {
        setState((currentState) => ({
          ...currentState,
          downloadingFileList: [
            ...currentState.downloadingFileList.filter(
              (listFile) => listFile !== fullPath
            ),
          ],
        }))
      }
    },
    [firebase, onError]
  )

  return {
    downloadingFileList,
    downloadFile,
  }
}

export default useFileDownloader
