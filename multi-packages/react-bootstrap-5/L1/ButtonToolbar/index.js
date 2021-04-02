import React from "react";
// import { useSizeExtractor } from "@react-bootstrap-5/hooks";

const ButtonToolbarMain = (props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={`btn-toolbar ${className}`} ref={ref} {...restProps}>
      {children}
    </div>
  );
};

const ButtonToolbar = React.forwardRef(ButtonToolbarMain);

ButtonToolbar.defaultProps = {
  className: "",
};

export default ButtonToolbar;
