const Alert = ({ bg, dismissable, className, children }) => (
  <div
    className={`alert alert-${bg} ${
      dismissable ? "alert-dismissible" : ""
    } ${className}`}
    role="alert"
  >
    {children}
    {dismissable && (
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    )}
  </div>
);

Alert.defaultProps = {
  bg: "primary",
  dismissable: true,
  className: "",
};

export default Alert;
