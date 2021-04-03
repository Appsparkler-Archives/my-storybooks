import React from "react";
import MarkJS from "mark.js/dist/mark.es6.min";

const unmark = (markJsInstance) =>
  new Promise((done) => {
    markJsInstance.unmark({
      done,
    });
  });

const useMarker = ({
  mark = new RegExp(),
  options = {},
  unmarkOptions = {},
  type = "mark",
}) => {
  const markerRef = React.useRef();

  const [markerState, setMarkerState] = React.useState({
    markJsInstance: null,
  });

  React.useEffect(() => {
    if (markerRef.current) {
      setMarkerState((currentState) => ({
        ...currentState,
        markJsInstance: new MarkJS(markerRef.current),
      }));
    }
  }, []);

  React.useEffect(() => {
    if (markerState.markJsInstance) {
      unmark(markerState.markJsInstance, unmarkOptions).then((...args) => {
        markerState.markJsInstance[type](mark, options);
      });
    }
  }, [mark, options, markerState.markJsInstance, type, unmarkOptions]);

  return markerRef;
};

export default useMarker;
