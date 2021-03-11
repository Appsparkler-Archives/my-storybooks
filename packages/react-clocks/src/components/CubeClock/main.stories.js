import React from "react";
import CubeClock from ".";

const Template = (args) => <CubeClock {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: Date.now(),
};

const Story = {
  title: "Clocks/Digital/Cube Clock",
  component: CubeClock,
};

export default Story;
