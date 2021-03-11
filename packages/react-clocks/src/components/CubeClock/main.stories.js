import React from "react";
import StyledCubeClock from "./styled";

const Template = (args) => <StyledCubeClock {...args} />;

export const Default = Template.bind({});
Default.args = {
  seconds: 22,
  minutes: 11,
  hours: 10,
};

const Story = {
  title: "Clocks/Cube Clock",
  component: StyledCubeClock,
};

export default Story;
