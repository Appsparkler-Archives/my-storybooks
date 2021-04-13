import React from "react";
// import MarkJS from "mark.js/dist/mark.es6.min";
import setupMarker from "../setupMarker";

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
  const { marker, markerRef } = setupMarker();
  React.useEffect(() => {
    if (marker) {
      unmark(marker, unmarkOptions).then((...args) => {
        marker[type](mark, options);
      });
    }
  }, [mark, options, marker, type, unmarkOptions]);

  return { markerRef, marker };
};

export default useMarker;
