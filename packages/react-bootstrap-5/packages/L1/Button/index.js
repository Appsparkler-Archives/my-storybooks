import React from "react";

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

const useOutlineExtractor = (props = {}) => {
  const { outline, ...restProps } = props;
  React.useMemo(() => {}, [outline]);
  return {};
};

const Button = (props, ref) => {
  const { variant, restProps: restProps0 } = useVariant(props);
  const { size, restProps: restProps1 } = useSize(restProps0);
  const { outline, ...restPropsAfterOutline } = restProps1;
  const { children, className, ...restProps2 } = restPropsAfterOutline;
  const variantClass = React.useMemo(() => {
    if (outline && variant) return `btn-outline-${variant}`;
    if (variant) return `btn-${variant}`;
    return "";
  }, [variant]);
  const sizeClass = React.useMemo(() => {
    if (size) return `btn-${size}`;
    return "";
  }, [size]);
  return (
    <button
      ref={ref}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      {...restProps2}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
