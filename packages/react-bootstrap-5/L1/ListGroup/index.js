import React from "react";
import PropTypes from "prop-types";
import { useSizeExtractor, useVariantExtractor } from "../../hooks";

const getActionClass = ({ As }) => {
  const isLink = As === "a";
  const isButton = As === "button";
  if (isLink || isButton) return "list-group-item-action";
  return "";
};
const getActiveClass = ({ active }) => (active ? `active` : "");
const getDisabledClass = ({ disabled }) => (disabled ? "disabled" : "");
const getListGroupHorizontalClass = ({ horizontal, size }) => {
  if (size && horizontal) return `list-group-horizontal-${size}`;
  if (horizontal) return "list-group-horizontal";
  return "";
};
const getVariantClass = ({ variant }) =>
  variant ? `list-group-item-${variant}` : "";
export const ListGroupItem = React.forwardRef((props, ref) => {
  const { children, className, as: As, active, disabled, ...restProps } = props;
  const activeClass = React.useMemo(() => getActiveClass({ active }), [active]);
  const actionClass = React.useMemo(() => getActionClass({ As }), [As]);
  const disabledClass = React.useMemo(() => getDisabledClass({ disabled }), [
    disabled,
  ]);
  const { variant, restProps: propsAfterVariant } = useVariantExtractor(
    restProps
  );
  const variantClass = React.useMemo(() => getVariantClass({ variant }), [
    variant,
  ]);
  return (
    <As
      className={`list-group-item ${activeClass} ${actionClass} ${variantClass} ${disabledClass} ${className}`}
      ref={ref}
      {...propsAfterVariant}
    >
      {children}
    </As>
  );
});

ListGroupItem.defaultProps = {
  as: "li",
  active: false,
  className: "",
  disabled: false,
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(["li", "button", "a"]),
  active: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

const ListGroup = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    horizontal,
    flush,
    as: As,
    ...restProps
  } = props;
  const flushClass = React.useMemo(() => {
    if (flush) return `list-group-flush`;
    return "";
  }, [flush]);
  const { size, restProps: propsAfterSize } = useSizeExtractor(restProps);
  const listGroupHorizontalClass = React.useMemo(
    () => getListGroupHorizontalClass({ size, horizontal }),
    [size, horizontal]
  );
  return (
    <As
      className={`list-group ${listGroupHorizontalClass} ${flushClass} ${className}`}
      {...propsAfterSize}
      ref={ref}
    >
      {children}
    </As>
  );
});

ListGroup.propTypes = {
  as: PropTypes.oneOf(["ol", "ul"]),
  children: PropTypes.node,
  flush: PropTypes.bool,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

ListGroup.defaultProps = {
  as: "ul",
  flush: false,
};

export default ListGroup;
