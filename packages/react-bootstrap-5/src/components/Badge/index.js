import React from "react";
import PropTypes from "prop-types";

const Badge = ({ bg, pill, className, children }) => (
  <span className={`badge bg-${bg} ${pill ? "rounded-pill" : ""} ${className}`}>
    {children}
  </span>
);

Badge.defaultProps = {
  bg: "primary",
  pill: false,
  className: "",
  children: "",
};
Badge.propTypes = {
  bg: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "dark",
    "light",
  ]),
};

export default Badge;
