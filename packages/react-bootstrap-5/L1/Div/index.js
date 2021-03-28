import React from "react";
import PropTypes from "prop-types";
// import { useBootstrapUtilities } from '@react-bootstrap-5/hooks';
const Div = (props) => {
  const { children, className, ...restProps } = props;
  // const utilityClasses = useBootstrapUtilities(props);
  const utilityClasses = "bg-primary text-light";
  return <div className={`${utilityClasses} ${className}`}>{children}</div>;
};

Div.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

Div.defaultProps = {
  className: "",
};

export default Div;
