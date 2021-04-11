import React from "react";
import PropTypes from "prop-types";
import { useVariantExtractor } from "@react-bootstrap-5/hooks";

const getBgClass = ({ variant }) => (variant ? `bg-${variant}` : "");

const getPillClass = ({ pill }) => (pill ? "rounded-pill" : "");

const Badge = React.forwardRef(({ children, ...props }, ref) => {
  const { variant, restProps: propsAfterVariant } = useVariantExtractor(props);
  const { className, pill, ...restProps } = propsAfterVariant;

  const bgClass = React.useMemo(() => getBgClass({ variant }), [variant]);

  const roundedPill = React.useMemo(() => getPillClass({ pill }), [pill]);

  return (
    <span
      className={`badge ${bgClass} ${roundedPill} ${className}`}
      {...restProps}
      ref={ref}
    >
      {children}
    </span>
  );
});
Badge.propTypes = {
  children: PropTypes.node,
  pill: PropTypes.bool,
};
Badge.defaultProps = {
  className: "",
};

export default Badge;
