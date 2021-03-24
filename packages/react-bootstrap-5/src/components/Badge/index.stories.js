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
export const Info = Template.bind({});
Info.args = {
  ...Primary.args,
  bg: "info",
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
  <div className="d-flex gap-2">
    <Badge {...Template.args}>default</Badge>
    <Badge {...Primary.args}>primary</Badge>
    <Badge {...Secondary.args}>secondary</Badge>
    <Badge {...Success.args}>success</Badge>
    <Badge {...Info.args}>info</Badge>
    <Badge {...Warning.args}>warning</Badge>
    <Badge {...Danger.args}>danger</Badge>
    <Badge {...Light.args}>light</Badge>
    <Badge {...Dark.args}>dark</Badge>
  </div>
);

const Story = {
  title: "Components/Badge",
  component: Badge,
};

export default Story;
