import React from "react";
import { useSizeExtractor } from "@react-bootstrap-5/hooks";

const ButtonGroup = (props, ref) => {
  const { className, children, ...restProps } = props;
  const { size, restProps: propsAfterSize } = useSizeExtractor(restProps);
  const btnGroupSizeClass = React.useMemo(() => {
    if (size) return `btn-group-${size}`;
    return "";
  }, [size]);
  return (
    <div
      className={`btn-group ${btnGroupSizeClass} ${className}`}
      {...propsAfterSize}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(ButtonGroup);
