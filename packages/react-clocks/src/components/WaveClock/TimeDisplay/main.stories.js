import DisplayedTime from ".";
const Template = (args) => <DisplayedTime {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: 1615445823539,
  showSeconds: true,
};

const Story = {
  title: "Clocks/Digital/Wave Clock",
  component: DisplayedTime,
};

export default Story;
