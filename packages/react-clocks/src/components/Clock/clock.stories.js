import React from "react";
import Clock from "./index";

const Template = (args) => <Clock {...args} />;

const TickingClock = (args) => {
  const [state, setState] = React.useState({
    timestamp: Date.now(),
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const timestamp = Date.now();
      setState((currentState) => ({
        ...currentState,
        timestamp,
      }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <Clock timestamp={state.timestamp} />;
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
  title: "Clocks/Sieko Analog 123 ",
  component: Clock,
};

export default Story;
