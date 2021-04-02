import RegExpMarker from "./";

const Story = {
  title: "Mark.js/RegExpMarker",
  component: RegExpMarker,
};

const Template = ({ children, ...args }) => (
  <RegExpMarker {...args}>{children}</RegExpMarker>
);
Template.args = {
  mark: /oo/,
  children: "Foo Boo Koo",
};

export const WithoutOtions = Template.bind({});
WithoutOtions.args = Template.args;

export const WithMarkOptions = Template.bind({});
WithMarkOptions.args = {
  ...Template.args,
  mark: /World/,
  children: (
    <div>
      <h3>Hello World</h3>
      <p>Hello World</p>
    </div>
  ),
  options: {
    exclude: ["h3"],
  },
};

export default Story;
