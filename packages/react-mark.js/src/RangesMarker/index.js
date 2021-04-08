import React from "react";
import PropTypes from "prop-types";
import useMarker from "../useMarker";

const RangesMarker = ({
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
    type: "markRanges",
  });
  return (
    <As ref={markerRef} {...props}>
      {children}
    </As>
  );
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
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
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
  as: "div",
  unmarkOptions: {},
};

export default RangesMarker;
