import React from "react";
import UniClock from ".";
import { useTickingTimestamp } from "react-clocks-hooks";

const Template = (args) => <UniClock {...args} />;

const TickingClock = (args) => {
  const tickingTimestamp = useTickingTimestamp({ timestamp: args.timestamp });
  return <UniClock timestamp={tickingTimestamp} />;
};

export const Static = Template.bind({});
Static.args = {
  timestamp: 1615384885000,
};

export const Ticking = (args) => <TickingClock {...args} />;
Ticking.args = {
  ...Static.args,
};

const Story = {
  title: "Clocks/Analog/Uni(corn)Clock",
  component: UniClock,
};

export default Story;
