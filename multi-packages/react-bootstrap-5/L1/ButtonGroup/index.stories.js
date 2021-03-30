import React from "react";
import Button from "../Button";

const ButtonGroup = ({ children }) => (
  <div className="btn-group">{children}</div>
);

export const Primary = () => (
  <ButtonGroup>
    <Button warning>Button 1</Button>
    <Button success>Button 2</Button>
    <Button danger>Button 3</Button>
  </ButtonGroup>
);

const Story = {
  title: "l1/Button Group",
  component: ButtonGroup,
};

export default Story;
