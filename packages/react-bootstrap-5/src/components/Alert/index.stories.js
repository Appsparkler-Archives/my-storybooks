import React from "react";
import Badge from "./";

const Template = (args) => <Badge {...args} />;
Template.args = {
  bg: "primary",
  pill: false,
  className: "p-2",
  children: "Primary",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Template.args,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  bg: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  bg: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  bg: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  bg: "warning",
};

export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  bg: "light",
  className: "text-dark",
};

export const Dark = Template.bind({});
Dark.args = {
  ...Primary.args,
  bg: "dark",
};

export const All = () => (
  <div className="flex">
    <Badge className="mx-1">Default</Badge>
    <Badge bg="primary" className="mx-1">
      Primary
    </Badge>
    <Badge bg="secondary" className="mx-1">
      Secondary
    </Badge>
    <Badge bg="success" className="mx-1 bg-gradient">
      Success
    </Badge>
    <Badge bg="info" className="mx-1">
      Info
    </Badge>
    <Badge bg="danger" className="mx-1">
      Danger
    </Badge>
    <Badge bg="warning" className="mx-1">
      Warning
    </Badge>
    <Badge bg="light" className="mx-1 text-dark">
      Light
    </Badge>
    <Badge bg="dark" className="mx-1">
      Dark
    </Badge>
  </div>
);

const Story = {
  title: "Components/Badge",
  component: Badge,
};

export default Story;
