import React from "react";
import PropTypes from "prop-types";

const getActionClass = ({ As }) => {
  const isLink = As === "a";
  const isButton = As === "button";
  if (isLink || isButton) return "list-group-item-action";
  return "";
};
const getActiveClass = ({ active }) => (active ? `active` : "");
const getDisabledClass = ({ disabled }) => (disabled ? "disabled" : "");

export const ListGroupItem = React.forwardRef((props) => {
  const { children, as: As, active, disabled, ...restProps } = props;
  const activeClass = React.useMemo(() => getActiveClass({ active }), [active]);
  const actionClass = React.useMemo(() => getActionClass({ As }), [As]);
  const disabledClass = React.useMemo(() => getDisabledClass({ disabled }), [
    disabled,
  ]);
  return (
    <As
      className={`list-group-item ${activeClass} ${actionClass} ${disabledClass} `}
      {...restProps}
    >
      {children}
    </As>
  );
});

ListGroupItem.defaultProps = {
  as: "li",
  active: false,
};

ListGroupItem.propTypes = {
  as: PropTypes.oneOf(["li", "button", "a"]),
  active: PropTypes.bool,
};

const ListGroup = React.forwardRef(({ children, className, flush, as: As }) => {
  const flushClass = React.useMemo(() => {
    if (flush) return `list-group-flush`;
    return "";
  }, [flush]);
  return (
    <As className={`list-group ${flushClass} ${className}`}>{children}</As>
  );
});

ListGroup.propTypes = {
  as: PropTypes.oneOf(["ol", "ul"]),
  children: PropTypes.node,
  flush: PropTypes.bool,
};

ListGroup.defaultProps = {
  as: "ul",
  flush: false,
};

export default ListGroup;
