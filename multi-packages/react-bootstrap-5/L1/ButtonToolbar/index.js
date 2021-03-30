import React from "react";
import { useSizeExtractor } from "@react-bootstrap-5/hooks";

const ButtonToolbar = (props, ref) => {
  const { className, children } = props;
  const { size, restProps: propsAfterSize } = useSizeExtractor(props);
  const btnGroupSizeClass = React.useMemo(() => {
    if (size) return `btn-group-${size}`;
    return "";
  }, [size]);
  return (
    <div
      className={`btn-toolbar ${btnGroupSizeClass} ${className}`}
      {...propsAfterSize}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(ButtonToolbar);
