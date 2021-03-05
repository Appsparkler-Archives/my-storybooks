# React Redux Firebase Hooks

This objective of this module; `react-redux-firebase-hooks`, is to simplify the following operations:

1. [Managing files](#managing-files-with-usefilemanager---a-complete-file-management-solution)
1. Connecting to a Firestore collection
1. Uploading File(s)
1. Downloading File(s)
1. Removing File(s)

## Pre-requisites

- Dependencies for this modules are `react-redux`, `react-redux-firebase` and `redux-firestore`
- We need to setup the `react-redux-firebase` provider as per [the documentation](http://react-redux-firebase.com/docs/getting_started.html).
- We would also setup `firebase/firestore` and `firebase/storage` as the metadata of the files stored in storage will be saved in a Firestore collection.
  So, if you have configured as per the [react-redux-firebase-getting-started-guide](http://react-redux-firebase.com/docs/getting_started.html); you need to include the following additional configuration:

```js
// additional configuration (if not already setup)
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // since we need Firestore
import 'firebase/firestore' // we need firestore
import 'firebase/storage' // we need storage
//...
firebase.firestore() // initialize firestore
//..
const rrfConfig = {
  useFirestoreForStorageMeta: true, // we will store meta in Firestore
}
//..
const rootReducer = combineReducers({
  //..
  firestore: firestoreReducer, // since we need Firestore
})
//...
const rrfProps = {
  //...
  createFirestoreInstance, // since we need Firestore
}
```

Here is the full configuration of the React-Redux-Firebase-Provider:

```js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // we need firestore to store the files meta
import 'firebase/storage' // we need storage to store the files
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

const fbConfig = {}

// react-redux-firebase config
const rrfConfig = {
  // userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
  useFirestoreForStorageMeta: true,
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  // firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  createFirestoreInstance // <- needed if using firestore
}

// Setup react-redux so that connect HOC can be used
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <FileManagerComponent />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
```

## Managing files with `useFileManager` - A complete file-management solution
When we call the `useFileManager` hook; as shown in the full-example, it returns a bunch of utilities such as `files, uploadFiles, uploadingFileList, etc.` which can help us manage our FileManager.  The example below doesn't have much CSS; however, it renders a very basic `Firebase File Manager`.
### Full example:
```js
import React from 'react'
import useFileManager from 'react-redux-firebase-hooks'

const FileManager = ({ collectionPath, storagePath }) => {
  const {
    // list of files that are/will-be uploaded
    files, // list of docs on the collection-path (also; the meta for the files uploaded will be stored in this collection)

    // uploading files info
    uploadFiles, // method to upload-files
    uploadingFileList, // arry of files that are uploading

    // downloading files info
    downloadFile, // method to download files
    downloadingFileList, // array of files that are downloading

    // removing files info
    removeFile, // method to remove files
    removingFileList, // array of files that are being removed
  } = useFileManager({
    collectionPath, // the firestore collection path
    storagePath, // the storage path
    onCollectionPathError: console.error, // firestore-collection-path error callback (called in case there is an error in the collectionPath - it needs to have odd-segments)
    onUploadError: console.error, // triggered when there an error during upload
    onDownloadError: console.error,  // triggered when there an error during download
    onRemoveError: console.error,  // triggered when there an error during remove/delete
  }) // The Hook in action

  // When user uploads a file with the file input
  const onChangeFileInput = React.useCallback(
    async (evt) => {
      const { files } = evt.target
      await uploadFiles(files) // we need to pass it an array of files directly from the file-input
    },
    [uploadFiles]
  )

  // When user click on CTA to download a single file
  const onClickDownloadFile = React.useCallback(
    async (evt) => {
      const { key: fileKey } = evt.target.dataset
      await downloadFile(files[fileKey].fullPath) // we need to pass the storage's fullPath for the file.
    },
    [downloadFile, files]
  )

  // When use clicks on CTA to delete the file
  const onClickDeleteFile = React.useCallback(
    async (evt) => {
      const { key: fileKey } = evt.target.dataset
      await removeFile({
        filePath: files[fileKey].fullPath, // path to the file in storage
        docPath: `${collectionPath}/${fileKey}`, // path to the document that contains the file's meta
      })
    },
    [files, removeFile, collectionPath]
  )
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
            position: 'fixed',
            padding: 10,
            right: 0,
            top: 0,
            background: 'black',
            color: 'yellow',
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
  )
}

export default React.memo(FileManager)
```
