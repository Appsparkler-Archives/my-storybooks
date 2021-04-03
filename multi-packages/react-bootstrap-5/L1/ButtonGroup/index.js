import React from "react";
import { useSizeExtractor } from "@react-bootstrap-5/hooks";
import PropTypes from "prop-types";

const getSizeClass = ({ size }) => (size ? `btn-group-${size}` : "");

const ButtonGroup = React.forwardRef((props, ref) => {
  const { className, children, ...restProps } = props;
  const { size, restProps: propsAfterSize } = useSizeExtractor(restProps);
  const btnGroupSizeClass = React.useMemo(() => getSizeClass({ size }), [size]);
  return (
    <div
      className={`btn-group ${btnGroupSizeClass} ${className}`}
      {...propsAfterSize}
      ref={ref}
    >
      {children}
    </div>
  );
});

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonGroup;
