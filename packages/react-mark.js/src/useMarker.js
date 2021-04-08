import React from "react";
import MarkJS from "mark.js/dist/mark.es6.min";

const unmark = (marker) =>
  new Promise((done) => {
    marker.unmark({
      done,
    });
  });

const useMarker = ({
  mark = "",
  options = {},
  unmarkOptions = {},
  type = "mark",
} = {}) => {
  const markerRef = React.useRef();

  const [markerState, setMarkerState] = React.useState({
    marker: null,
  });

  React.useEffect(() => {
    if (markerRef.current) {
      setMarkerState((currentState) => ({
        ...currentState,
        marker: new MarkJS(markerRef.current),
      }));
    }
  }, []);

  React.useEffect(() => {
    if (markerState.marker) {
      unmark(markerState.marker, unmarkOptions).then((...args) => {
        markerState.marker[type](mark, options);
      });
    }
  }, [mark, options, markerState.marker, type, unmarkOptions]);

  return { markerRef, ...markerState };
};

export default useMarker;
