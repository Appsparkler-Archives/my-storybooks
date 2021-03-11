import React, { useState, useEffect } from "react";
import { useTickingTimestamp } from "react-clocks-hooks";
import CubeClock from ".";

const Template = (args) => <CubeClock {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: 1615433107000,
};

export const Ticking = ({ timestamp }) => {
  const tickingTimeStamp = useTickingTimestamp({ timestamp });
  return <CubeClock timestamp={tickingTimeStamp} />;
};
Ticking.args = Default.args;

const Story = {
  title: "Clocks/Digital/Cube Clock V2",
  component: CubeClock,
};

export default Story;
