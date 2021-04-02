import React from 'react';
import {useTickingTimestamp} from 'react-clocks-hooks';
import Clock from './index';

const Template = (args) => <Clock {...args} />;

export const Static = Template.bind({});
Static.args = {
  timestamp: 1615384885000,
};

export const Ticking = (args) => {
  const tickingTimestamp = useTickingTimestamp({timestamp: args.timestamp});
  return <Clock timestamp={tickingTimestamp} />;
};
Ticking.args = {
  ...Static.args,
};

const Story = {
  title: 'Clocks/Analog/Sieko Analog 123 ',
  component: Clock,
};

export default Story;
