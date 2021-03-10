import React from "react";
import Clock from "./index";

const Template = (args) => <Clock {...args} />;

const TickingClock = (args) => {
  const [state, setState] = React.useState({
    timestamp: Date.now(),
    intervalId: null,
    intervalIds: [],
  });

  const startClock = React.useCallback(() => {
    const intervalId = setInterval(() => {
      console.log("tick");
      setState((currentState) => ({
        ...currentState,
        timestamp: Date.now(),
      }));
    }, 1000);
    setState((currentState) => ({
      ...currentState,
      intervalId,
      intervalIds: [...currentState.intervalIds, intervalId],
    }));
  }, []);

  const stopClock = React.useCallback(() => {
    if (state.intervalId) {
      setState((currentState) => {
        clearInterval(currentState.intervalId);
        return {
          ...currentState,
          intervalId: null,
        };
      });
    }
  }, [state.intervalId]);

  React.useEffect(() => {
    if (!state.intervalId) {
      startClock();
    }
    return () => stopClock();
  }, [state.intervalId]);

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Clock timestamp={state.timestamp} />
    </div>
  );
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
