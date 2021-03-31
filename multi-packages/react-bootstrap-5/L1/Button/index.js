import React from "react";
import {
  useVariantExtractor,
  useSizeExtractor,
} from "@react-bootstrap-5/hooks";

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
