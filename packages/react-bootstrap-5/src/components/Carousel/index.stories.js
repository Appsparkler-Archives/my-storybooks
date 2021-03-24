import Carousel from "./index";
import CarouselDecorator from "../../hoc/Carousel/decorator.js";

const Template = () => <Carousel />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Components/Carousel",
  component: Carousel,
  decorators: [CarouselDecorator],
};

export default Story;
