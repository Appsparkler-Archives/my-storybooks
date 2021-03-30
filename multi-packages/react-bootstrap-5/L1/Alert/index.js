import React from "react";
import { useVariantExtractor } from "@react-bootstrap-5/hooks";

const Alert = React.forwardRef((props, ref) => {
  const { variant, restProps: propsAfterVariant } = useVariantExtractor(props);
  const {
    children,
    className = "",
    pill,
    dismissable,
    ...restProps
  } = propsAfterVariant;

  const alertDismissable = React.useMemo(() => {
    if (dismissable) {
      return `alert-dismissible fade show`;
    }
    return "";
  }, [dismissable]);

  const alertVariant = React.useMemo(() => {
    if (variant) return `alert-${variant}`;
    return "";
  }, [variant]);

  return (
    <div
      className={`alert ${alertVariant} ${alertDismissable}`}
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
});
Alert.defaultProps = {
  className: "",
};

export const AlertLink = React.forwardRef(
  ({ children, className, ...restProps }, ref) => (
    <a className={`alert-link ${className}`} ref={ref} {...restProps}>
      {children}
    </a>
  )
);
AlertLink.defaultProps = {
  className: "",
};

export default Alert;
