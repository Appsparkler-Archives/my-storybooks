import React from "react";
import {
  useVariantExtractor,
  useSizeExtractor,
} from "@react-bootstrap-5/hooks";
import PropTypes from "prop-types";

const getVariantClass = ({ variant, outline }) => {
  if (outline && variant) return `btn-outline-${variant}`;
  if (variant) return `btn-${variant}`;
  return "";
};
const getSizeClass = ({ size }) => (size ? `btn-${size}` : "");
const getActiveClass = ({ active }) => (active ? "active" : "");

const Button = (props, ref) => {
  const { as: As = "button", active, ...afterActiveProps } = props;
  const { variant, restProps: afterVariantProps } = useVariantExtractor(
    afterActiveProps
  );
  const { size, restProps: propsAfterSize } = useSizeExtractor(
    afterVariantProps
  );
  const { children, outline, className, ...restProps } = propsAfterSize;
  const variantClass = React.useMemo(
    () => getVariantClass({ variant, outline }),
    [variant, outline]
  );
  const sizeClass = React.useMemo(() => getSizeClass({ size }), [size]);
  const activeClass = React.useMemo(() => getActiveClass({ active }), [active]);
  return (
    <As
      ref={ref}
      className={`btn ${variantClass} ${sizeClass} ${activeClass} ${className}`}
      {...restProps}
    >
      {children}
    </As>
  );
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default React.forwardRef(Button);
