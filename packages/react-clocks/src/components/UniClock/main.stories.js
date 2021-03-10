import React from "react";
import UniClock from "./styled";

const Template = (args) => <UniClock />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Clocks/Uni(corn)Clock",
  component: UniClock,
};

export default Story;
