import DisplayedTime from ".";
const Template = (args) => <DisplayedTime {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: 0,
  showSeconds: true,
};

const Story = {
  title: "Clocks/Digital/Wave Clock/Displayed Time",
  component: DisplayedTime,
};

export default Story;
