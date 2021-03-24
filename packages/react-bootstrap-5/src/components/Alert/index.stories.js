import React from "react";
import Alert from "./";
import AlertDecorator from "../../hoc/Alert/decorator";

const getChildren = (type) => `A simple ${type} alert—check it out!`;
const Template = (args) => <Alert {...args} />;
Template.args = {
  children: getChildren("primary"),
  dismissable: true,
};

export const Primary = Template.bind({});
Primary.args = {
  ...Template.args,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  bg: "secondary",
  children: getChildren("secondary"),
};

export const Info = Template.bind({});
Info.args = {
  ...Primary.args,
  bg: "info",
  children: getChildren("info"),
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  bg: "success",
  children: getChildren("success"),
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  bg: "danger",
  children: getChildren("danger"),
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  bg: "warning",
  children: getChildren("warning"),
};

export const Light = Template.bind({});
Light.args = {
  ...Light.args,
  bg: "light",
  children: getChildren("light"),
};
Light.decorators = [
  (Story) => (
    <div className="bg-dark p-5">
      <Story />
    </div>
  ),
];

export const Dark = Template.bind({});
Dark.args = {
  ...Dark.args,
  bg: "dark",
  children: getChildren("dark"),
};

export const All = () => (
  <div>
    <Alert {...Primary.args} />
    <Alert {...Secondary.args} />
    <Alert {...Info.args} />
    <Alert {...Success.args} />
    <Alert {...Warning.args} />
    <Alert {...Danger.args} />
    <Alert {...Light.args} />
    <Alert {...Dark.args} />
  </div>
);

const Story = {
  title: "Components/Alert",
  component: Alert,
  decorators: [AlertDecorator],
};

export default Story;
