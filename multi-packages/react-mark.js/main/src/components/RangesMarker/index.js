import React from "react";
import PropTypes from "prop-types";
import useMarker from "../useMarker";

const RangesMarker = ({ children, mark, options, unmarkOptions }) => {
  const markerRef = useMarker({
    mark,
    options,
    unmarkOptions,
    type: "markRanges",
  });
  return <div ref={markerRef}>{children}</div>;
};

RangesMarker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#markregexp)*/
  options: PropTypes.object,
  /** An array */
  mark: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number,
      length: PropTypes.number,
    })
  ).isRequired,
  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

RangesMarker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  unmarkOptions: {},
};

export default React.memo(RangesMarker);
