import React from "react";
import PropTypes from "prop-types";
import useMarker from "../useMarker";

const Marker = ({
  as: As,
  children,
  mark,
  options,
  unmarkOptions,
  ...props
}) => {
  const { markerRef } = useMarker({
    mark,
    options,
    unmarkOptions,
    type: "mark",
  });
  return (
    <As ref={markerRef} {...props}>
      {children}
    </As>
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
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Marker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  // options: {},
  // unmarkOptions: {},
  as: "div",
};

export default Marker;
