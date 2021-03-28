import React from "react";
import Alert from ".";
import AlertDecorator from "./decorator";

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
  decorators: [AlertDecorator],
};

export default Story;
