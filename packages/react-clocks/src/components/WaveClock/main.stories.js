import React from "react";
import WaveClock from "./";

const Template = () => <WaveClock />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "clocks/Digital/Wave Clock",
  componennt: WaveClock,
};

export default Story;