import React from 'react';
import useFirestoreCollection from './useFirestoreCollection';

const Story = {
  title: 'Hooks/File Manager/useFirestoreCollection',
};

export default Story;

const Template = ({collectionPath}) => {
  const collection = useFirestoreCollection({
    collectionPath,
    onError: console.error,
  });
  if (!collection) return null;
  return Object.entries(collection).map(([id, doc]) => (
    <pre key={id}>{JSON.stringify(doc, null, 2)}</pre>
  ));
};
Template.args = {
  collectionPath: 'uploadedFiles',
};

export const Example = Template.bind({});
Example.args = {
  ...Template.args,
};
