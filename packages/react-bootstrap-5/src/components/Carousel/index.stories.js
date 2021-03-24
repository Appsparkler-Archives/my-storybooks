import Carousel from "./index";

const Template = () => <Carousel />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Components/Carousel",
  component: Carousel,
};

export default Story;
