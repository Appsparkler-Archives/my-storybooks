import React from "react";
import Alert, { AlertLink } from ".";
import AlertDecorator, { AlertJS } from "./decorator";
import noop from "lodash/noop";
export const Basic = () => (
  <div className="d-flex flex-column p-2">
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
  <div className="d-flex flex-column p-2">
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

export const WithAlertLink = () => (
  <div className="d-flex flex-column p-2">
    <Alert primary dismissable>
      A simple primary alert with{" "}
      <AlertLink href="#">an example link</AlertLink>. Give it a click if you
      like.
    </Alert>
    <Alert secondary dismissable>
      A simple secondary alert with{" "}
      <AlertLink href="#">an example link</AlertLink>. Give it a click if you
      like.
    </Alert>
    <Alert success dismissable>
      A simple success alert with{" "}
      <AlertLink href="#">an example link</AlertLink>. Give it a click if you
      like.
    </Alert>
    <Alert danger dismissable>
      A simple danger alert with <AlertLink href="#">an example link</AlertLink>
      . Give it a click if you like.
    </Alert>
    <Alert warning dismissable>
      A simple warning alert with{" "}
      <AlertLink href="#">an example link</AlertLink>. Give it a click if you
      like.
    </Alert>
    <Alert light dismissable>
      A simple light alert with <AlertLink href="#">an example link</AlertLink>.
      Give it a click if you like.{" "}
    </Alert>
    <Alert dark dismissable>
      A simple dark alert with{" "}
      <AlertLink href="#" as="button">
        an example link
      </AlertLink>
      . Give it a click if you like.{" "}
    </Alert>
  </div>
);

const useAlert = (args = {}) => {
  const { onClose = noop, onClosed = noop } = args;
  const alertRef = React.useRef();
  React.useEffect(() => {
    alertRef.current.addEventListener("closed.bs.alert", onClosed);
    alertRef.current.addEventListener("close.bs.alert", onClose);
  }, [onClose, onClosed]);
  return alertRef;
};

export const DismissableWithEvents = () => {
  const alertRef = useAlert({
    onClose: (evt) => {
      alert("gonna close");
    },
    onClosed: (evt) => {
      alert("closed");
      alertRef.current = null;
    },
  });
  const onClickClose = React.useCallback(() => {
    const instance = new AlertJS(alertRef.current);
    instance.close();
  }, []);
  return (
    <div className="d-flex flex-column p-2">
      <Alert primary dismissable ref={alertRef}>
        A simple primary alert—check it out!
      </Alert>
      <div>
        <button
          title="Close from outside the alert"
          type="button"
          className="btn-close bg-warning"
          onClick={onClickClose}
        ></button>
      </div>
    </div>
  );
};

const Story = {
  title: "L1/Alerts",
  component: Alert,
  decorators: [AlertDecorator],
};

export default Story;
