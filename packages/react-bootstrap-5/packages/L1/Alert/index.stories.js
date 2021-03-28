import React from "react";

const Alert = (props) => {
  const {
    children,
    className,
    primary,
    dismissable,
    secondary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    pill,
    ...restProps
  } = props;
  const alertDismissable = React.useMemo(() => {
    if (dismissable) {
      return `alert-dismissible fade show`;
    }
    return "";
  }, [dismissable]);
  const bg = React.useMemo(() => {
    if (primary) return "primary";
    if (secondary) return "secondary";
    if (info) return "info";
    if (success) return "success";
    if (warning) return "warning";
    if (danger) return "danger";
    if (light) return "light";
    if (dark) return "dark";
  }, [primary, secondary, info, success, warning, danger, light, dark]);
  return (
    <div
      className={`alert alert-${bg} ${alertDismissable}`}
      role="alert"
      {...restProps}
    >
      {children}
      {dismissable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      )}
    </div>
  );
};

export const Basic = () => (
  <div className="d-flex flex-column bg-dark p-2">
    <Alert primary>A simple primary alert—check it out!</Alert>
    <Alert secondary>A simple secondary alert—check it out!</Alert>
    <Alert success>A simple success alert—check it out!</Alert>
    <Alert danger>A simple danger alert—check it out!</Alert>
    <Alert warning>A simple warning alert—check it out!</Alert>
    <Alert light>A simple light alert—check it out!</Alert>
    <Alert dark>A simple dark alert—check it out!</Alert>
  </div>
);

export const Dismissable = () => (
  <div className="d-flex flex-column bg-dark p-2">
    <Alert primary dismissable>
      A simple primary alert—check it out!
    </Alert>
    <Alert secondary dismissable>
      A simple secondary alert—check it out!
    </Alert>
    <Alert success dismissable>
      A simple success alert—check it out!
    </Alert>
    <Alert danger dismissable>
      A simple danger alert—check it out!
    </Alert>
    <Alert warning dismissable>
      A simple warning alert—check it out!
    </Alert>
    <Alert light dismissable>
      A simple light alert—check it out!
    </Alert>
    <Alert dark dismissable>
      A simple dark alert—check it out!
    </Alert>
  </div>
);
const Story = {
  title: "L1/Alerts",
  component: Alert,
};

export default Story;
