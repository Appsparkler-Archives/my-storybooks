import PropTypes from "prop-types";

const Button = ({ outline, type, size, children, className, ...props }) => (
  <button
    type="button"
    className={`btn btn-${size} btn${
      outline ? "-outline" : ""
    }-${type} ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  outline: PropTypes.bool,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "dark",
    "light",
    "link",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  outline: false,
  type: "primary",
  disabled: false,
  className: "",
  size: "md",
};

export default Button;
