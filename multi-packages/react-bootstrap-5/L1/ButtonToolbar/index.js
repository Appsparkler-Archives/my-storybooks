import React from "react";
// import { useSizeExtractor } from "@react-bootstrap-5/hooks";

const ButtonToolbar = (props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <div className={`btn-toolbar ${className}`} ref={ref} {...restProps}>
      {children}
    </div>
  );
};

ButtonToolbar.defaultProps = {
  className: "",
};

export default React.forwardRef(ButtonToolbar);
