import React from "react";
import PropTypes from "prop-types";

const usePosition = (args = {}) => {
  const { center, start, end } = args;
  const position = React.useMemo(() => {
    if (center) return "center";
    if (start) return "start";
    if (end) return "end";
    return "";
  }, [center, start, end]);
  return position;
};

const Nav = (props) => {
  const { children, as: As, className } = props;
  const position = usePosition(props);
  const positionClass = React.useMemo(() => {
    return position ? `justify-content-${position}` : "";
  }, [position]);
  return <As className={`nav ${positionClass} ${className}`}>{children}</As>;
};

Nav.defaultProps = {
  as: "ul",
  className: "",
};

Nav.propTypes = {
  as: PropTypes.oneOf(["ol", "ul", "nav", "div"]),
  center: PropTypes.bool,
  start: PropTypes.bool,
  end: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Nav;
