import React from "react";
export default (props = {}) => {
  const { sm, md, lg, ...restProps } = props;
  const size = React.useMemo(() => {
    if (sm) return "sm";
    if (md) return "md";
    if (lg) return "lg";
  }, [sm, md, lg]);

  return {
    restProps,
    size,
  };
};
