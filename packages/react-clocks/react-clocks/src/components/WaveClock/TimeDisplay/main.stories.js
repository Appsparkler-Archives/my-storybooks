/* eslint-disable react/prop-types */
import DisplayedTime from ".";
import { useTickingTimestamp } from "react-clocks-hooks";

const Template = (args) => <DisplayedTime {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: 1615445823539,
  showSeconds: true,
};

export const Ticking = ({ timestamp, showSeconds }) => {
  const tickingTimestamp = useTickingTimestamp({
    timestamp,
    interval: 1000,
  });
  return (
    <DisplayedTime timestamp={tickingTimestamp} showSeconds={showSeconds} />
  );
};
Ticking.args = {
  timestamp: Date.now(),
  showSeconds: false,
};

const Story = {
  title: "Clocks/Digital/Wave Clock",
  component: DisplayedTime,
};

export default Story;
