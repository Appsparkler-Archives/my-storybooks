import React from "react";
import {
  useVariantExtractor,
  useSizeExtractor,
} from "@react-bootstrap-5/hooks";

const useVariant = (props = {}) => {
  const {
    primary,
    secondary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    muted,
    ...restProps
  } = props;

  const variant = React.useMemo(() => {
    if (primary) return "primary";
    if (secondary) return "secondary";
    if (info) return "info";
    if (success) return "success";
    if (warning) return "warning";
    if (danger) return "danger";
    if (light) return "light";
    if (dark) return "dark";
    if (muted) return "muted";
  }, [primary, secondary, info, success, warning, danger, light, dark, muted]);

  return {
    variant,
    restProps,
  };
};

const useSize = (props = {}) => {
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

const Button = (props, ref) => {
  const { active, ...afterActiveProps } = props;
  const { variant, restProps: afterVariantProps } = useVariantExtractor(
    afterActiveProps
  );
  const { size, restProps: afterSizeProps } = useSizeExtractor(
    afterVariantProps
  );
  const { outline, ...restPropsAfterOutline } = afterSizeProps;
  const { children, className, ...restProps } = restPropsAfterOutline;
  const variantClass = React.useMemo(() => {
    if (outline && variant) return `btn-outline-${variant}`;
    if (variant) return `btn-${variant}`;
    return "";
  }, [variant]);
  const sizeClass = React.useMemo(() => {
    if (size) return `btn-${size}`;
    return "";
  }, [size]);

  const activeClass = React.useMemo(() => {
    if (active) return "active";
    return "";
  }, []);
  return (
    <button
      ref={ref}
      className={`btn ${variantClass} ${sizeClass} ${activeClass} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
