import React from "react";
import Button from "./index";

const Template = (args) => <Button {...args}>Bootstrap Button</Button>;
Template.args = {};

export const Default = Template.bind({});
Default.args = {};
const Story = {
  title: "Components/Button",
  component: Button,
};

export default Story;
