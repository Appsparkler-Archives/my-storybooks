import Accordian from "./index";
import CollapseDecorator from "../../hoc/Collapse/decorator";

const Template = () => <Accordian />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Components/Accordian",
  component: Accordian,
  decorators: [CollapseDecorator],
};

export default Story;
