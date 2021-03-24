const Alert = ({ bg, children }) => (
  <div className={`alert alert-${bg}`} role="alert">
    {children}
  </div>
);

Alert.defaultProps = {
  bg: "primary",
};

export default Alert;
