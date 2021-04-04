import React from "react";
import PropTypes from "prop-types";
import useMarker from "../useMarker";

const Marker = ({ children, mark, options, unmarkOptions, ...props }) => {
  const markerRef = useMarker({
    mark,
    options,
    unmarkOptions,
    type: "mark",
  });
  return (
    <div ref={markerRef} {...props}>
      {children}
    </div>
  );
};

Marker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#mark)*/
  options: PropTypes.object,
  /** A string or an array of strings - for ex `world` or `["world", "foo"]` */
  mark: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Marker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  // options: {},
  // unmarkOptions: {},
};

export default Marker;
