import React from "react";
import PropTypes from "prop-types";
import useMarker from "../useMarker";

const RegExpMarker = ({
  as: As,
  children,
  mark,
  options,
  unmarkOptions,
  ...props
}) => {
  const markerRef = useMarker({
    mark,
    options,
    unmarkOptions,
    type: "markRegExp",
  });
  return (
    <As ref={markerRef} {...props}>
      {children}
    </As>
  );
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
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

RegExpMarker.defaultProps = {
  /** For a full list of options; visit **[markregexp](https://markjs.io/#markregexp)** */
  options: {},
  unmarkOptions: {},
  as: "div",
};

export default RegExpMarker;
