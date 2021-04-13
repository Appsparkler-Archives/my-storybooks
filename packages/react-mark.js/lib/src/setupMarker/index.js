import React from "react";
import MarkJS from "mark.js/dist/mark.es6.min";

export default () => {
  const markerRef = React.useRef();
  const [marker, setMarker] = React.useState(null);
  React.useEffect(() => {
    if (markerRef.current) {
      const marker = new MarkJS(markerRef.current);
      setMarker(marker);
    }
  }, []);
  return { marker, markerRef };
};
