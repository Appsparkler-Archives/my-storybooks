import DisplayedTime from ".";
const Template = (args) => <DisplayedTime {...args} />;

export const Default = Template.bind({});
Default.args = {
  hours: 10,
  minutes: 10,
  seconds: 10,
};

const Story = {
  title: "Clocks/Digital/Wave Clock/Displayed Time",
  component: DisplayedTime,
};

export default Story;
