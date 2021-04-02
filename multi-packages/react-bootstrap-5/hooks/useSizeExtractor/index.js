import React from "react";
export default (props = {}) => {
  const { sm, md, lg, xl, xxl, ...restProps } = props;
  const size = React.useMemo(() => {
    if (sm) return "sm";
    if (md) return "md";
    if (lg) return "lg";
    if (xl) return "xl";
    if (xxl) return "xxl";
  }, [sm, md, lg]);

  return {
    restProps,
    size,
  };
};
