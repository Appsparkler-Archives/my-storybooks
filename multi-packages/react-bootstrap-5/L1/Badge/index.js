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
    pill,
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

  const roundedPill = React.useMemo(() => {
    if (pill) return "rounded-pill";
    return "";
  }, []);

  return (
    <span
      className={`badge bg-${bg} ${roundedPill} ${className}`}
      {...restProps}
      ref={ref}
    >
      {children}
    </span>
  );
});
Badge.defaultProps = {
  className: "",
};

export default Badge;
