import React from "react";
import Button from "./index";

const Template = (args) => (
  <div>
    <Button {...args} size="sm" className="mx-1">
      Bootstrap Button
    </Button>
    <Button {...args} size="md" className="mx-1">
      Bootstrap Button
    </Button>
    <Button {...args} size="lg" className="mx-1">
      Bootstrap Button
    </Button>
  </div>
);
Template.args = {};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};
export const PrimaryAndOutline = Template.bind({});
PrimaryAndOutline.args = {
  ...Primary.args,
  outline: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};
export const SecondaryAndOutline = Template.bind({});
SecondaryAndOutline.args = {
  ...Secondary.args,
  outline: true,
};
export const Info = Template.bind({});
Info.args = {
  type: "info",
};
export const InfoAndOutline = Template.bind({});
InfoAndOutline.args = {
  ...Info.args,
  outline: true,
};

const Story = {
  title: "Components/Button",
  component: Button,
};

export default Story;
