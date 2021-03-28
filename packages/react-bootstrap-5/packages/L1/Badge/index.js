import React from "react";

const Badge = React.forwardRef(({ children, ...props }, ref) => {
  const {
    className,
    primary,
    secondary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    ...restProps
  } = props;
  const bg = React.useMemo(() => {
    if (primary) return "primary";
    if (secondary) return "secondary";
    if (info) return "info";
    if (success) return "success";
    if (warning) return "warning";
    if (danger) return "danger";
    if (light) return "light";
    if (dark) return "dark";
  }, [primary, secondary, info, success, warning, danger, light, dark]);

  return (
    <span className={`badge bg-${bg} ${className}`} {...restProps} ref={ref}>
      {children}
    </span>
  );
});

export default Badge;
