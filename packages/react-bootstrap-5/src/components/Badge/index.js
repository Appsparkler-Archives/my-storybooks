import React from "react";
import PropTypes from "prop-types";

const getBadge = ({ badge }) => (badge ? "badge" : "");
const getRoundedPill = ({ roundedPill }) => (roundedPill ? "rounded-pill" : "");

const Badge = ({ bg, pill, className, children, ...props }) => {
  const utilitiyClasses = useBootstrapUtilities(props);
  return <span className={`${utilitiyClasses} ${className}`}>{children}</span>;
};

Badge.defaultProps = {
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
