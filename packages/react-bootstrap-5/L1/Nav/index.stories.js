import React from "react";
import Nav from "./";

const Template = (args) => (
  <Nav {...args}>
    <li className="nav-item">
      <a className="nav-link active rounded-0" aria-current="page" href="#">
        Active
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Link
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Link
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link disabled"
        href="#"
        tabIndex="-1"
        aria-disabled="true"
      >
        Disabled
      </a>
    </li>
  </Nav>
);
export const BaseNav = Template.bind({});
BaseNav.args = {
  as: "ol",
  start: true,
  center: false,
  end: false,
};

export const CenterNav = Template.bind({});
CenterNav.args = {
  as: "ul",
  center: true,
};

export const EndNav = Template.bind({});
EndNav.args = {
  as: "ul",
  end: true,
};

const Story = {
  title: "L1/Nav",
  component: Nav,
};

export default Story;
