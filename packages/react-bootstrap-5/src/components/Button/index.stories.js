import React from "react";
import Button from "./index";

const Template = (args) => (
  <table className="table">
    <thead>
      <tr>
        <th>Small (sm)</th>
        <th>Medium (md</th>
        <th>Large (lg)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Button {...args} size="sm" className="mx-1">
            Bootstrap Button
          </Button>
        </td>
        <td>
          <Button {...args} size="md" className="mx-1">
            Bootstrap Button
          </Button>
        </td>
        <td>
          <Button {...args} size="lg" className="mx-1">
            Bootstrap Button
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
);
Template.args = {};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};
export const PrimaryAndOutline = Template.bind({});
PrimaryAndOutline.args = {
  ...Primary.args,
  outline: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};
export const SecondaryAndOutline = Template.bind({});
SecondaryAndOutline.args = {
  ...Secondary.args,
  outline: true,
};
export const Info = Template.bind({});
Info.args = {
  type: "info",
};
export const InfoAndOutline = Template.bind({});
InfoAndOutline.args = {
  ...Info.args,
  outline: true,
};
export const Success = Template.bind({});
Success.args = {
  type: "success",
};
export const SuccessAndOutline = Template.bind({});
SuccessAndOutline.args = {
  ...Success.args,
  outline: true,
};

const Story = {
  title: "Components/Button",
  component: Button,
};

export default Story;
