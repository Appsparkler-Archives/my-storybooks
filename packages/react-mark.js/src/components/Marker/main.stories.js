import Marker from "./";

const Story = {
  title: "Mark.js/Marker",
  component: Marker,
};

const Template = (args) => <Marker {...args} />;
Template.args = {
  mark: "eu",
  children:
    "Cillum proident eu eiusmod incididunt pariatur. Ullamco qui deserunt ut reprehenderit cupidatat cupidatat nisi non occaecat non commodo. Magna incididunt eu laboris laboris labore. Sit duis ullamco qui nostrud aliqua do consectetur do incididunt eiusmod nulla consectetur.",
};

export const Example1 = Template.bind({});
Example1.args = Template.args;
Example1.storyName = "String";

export const MarkingASingleString = Template.bind({});
MarkingASingleString.args = {
  ...Template.args,
  mark: "Sit",
};

export const MarkingAnArrayOfStrings = Template.bind({});
MarkingAnArrayOfStrings.args = {
  ...Template.args,
  mark: ["Sit", "etur", "nostrud"],
};

export const WithMarkOptions = Template.bind({});
WithMarkOptions.args = {
  ...Template.args,
  mark: "orl",
  children: (
    <div>
      <h3>Hello World</h3>
      <p>Hello World</p>
    </div>
  ),
  options: {
    exclude: ["h3"],
    accuracy: "complementary",
  },
};

export default Story;
