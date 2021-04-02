import React from "react";
import PropTypes from "prop-types";
import useMarker from "../useMarker";

const RegExpMarker = ({ children, mark, options, unmarkOptions }) => {
  const { markerRef } = useMarker({
    mark,
    options,
    unmarkOptions,
    type: "markRegExp",
  });
  return <div ref={markerRef}>{children}</div>;
};

RegExpMarker.propTypes = {
  /** mark options as documented [in the options section](https://markjs.io/#markregexp)*/
  options: PropTypes.object,
  /** A Regular Expression - for ex `/\.js/g` */
  mark: PropTypes.instanceOf(RegExp).isRequired,
  /** un-mark options as documented [in the options section](https://markjs.io/#unmark)*/
  unmarkOptions: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

RegExpMarker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  unmarkOptions: {},
};

export default React.memo(RegExpMarker);
