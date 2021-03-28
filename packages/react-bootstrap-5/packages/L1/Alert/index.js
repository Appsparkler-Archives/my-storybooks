import React from "react";

const Alert = (props, ref) => {
  const {
    children,
    className,
    primary,
    dismissable,
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
  const alertDismissable = React.useMemo(() => {
    if (dismissable) {
      return `alert-dismissible fade show`;
    }
    return "";
  }, [dismissable]);
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
    <div
      className={`alert alert-${bg} ${alertDismissable}`}
      role="alert"
      {...restProps}
      ref={ref}
    >
      {children}
      {dismissable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      )}
    </div>
  );
};

export default React.forwardRef(Alert);
