import React from "react";
import PropTypes from "prop-types";
const ButtonToolbar = React.forwardRef((props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={`btn-toolbar ${className}`} ref={ref} {...restProps}>
      {children}
    </div>
  );
});

ButtonToolbar.defaultProps = {
  className: "",
};

ButtonToolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonToolbar;
