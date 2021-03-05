import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const useFirestoreCollection = ({ collectionPath, onError }) => {
  const numberOfSegments = collectionPath.split('/').filter(Boolean).length
  const isEven = numberOfSegments % 2 === 0
  if (isEven) {
    const error = new Error('Collection path segments should be odd!')
    onError(error)
    throw error
  }
  useFirestoreConnect(() => [{ collection: collectionPath }])
  const selector = ({ firestore: { data } }) => data[collectionPath]
  const collection = useSelector(selector)
  return collection
}

export default useFirestoreCollection
