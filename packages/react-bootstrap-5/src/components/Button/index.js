import PropTypes from "prop-types";

const Button = ({ type, size, children, className, ...props }) => (
  <button
    type="button"
    class={`btn btn-${size} btn-${type} ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "dark",
    "light",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
  className: "",
  size: "md",
};

export default Button;
