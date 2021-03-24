import React from "react";
import Alert from "./";
const getChildren = (type) => `A simple ${type} alert—check it out!`;
const Template = (args) => <Alert {...args} />;
Template.args = {
  children: getChildren("primary"),
};

export const Primary = Template.bind({});
Primary.args = {
  ...Template.args,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  bg: "secondary",
  children: getChildren("secondary"),
};

export const Info = Template.bind({});
Info.args = {
  ...Primary.args,
  bg: "info",
  children: getChildren("info"),
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  bg: "success",
  children: getChildren("success"),
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  bg: "danger",
  children: getChildren("danger"),
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  bg: "warning",
  children: getChildren("warning"),
};

export const Light = Template.bind({});
Light.args = {
  ...Light.args,
  bg: "light",
  children: getChildren("light"),
};
Light.decorators = [
  (Story) => (
    <div className="bg-dark p-5">
      <Story />
    </div>
  ),
];

// export const Light = Template.bind({});
// Light.args = {
//   ...Primary.args,
//   bg: "light",
//   className: "text-dark",
// };

// export const Dark = Template.bind({});
// Dark.args = {
//   ...Primary.args,
//   bg: "dark",
// };

// export const All = () => (
//   <div className="flex">
//     <Badge className="mx-1">Default</Badge>
//     <Badge bg="primary" className="mx-1">
//       Primary
//     </Badge>
//     <Badge bg="secondary" className="mx-1">
//       Secondary
//     </Badge>
//     <Badge bg="success" className="mx-1 bg-gradient">
//       Success
//     </Badge>
//     <Badge bg="info" className="mx-1">
//       Info
//     </Badge>
//     <Badge bg="danger" className="mx-1">
//       Danger
//     </Badge>
//     <Badge bg="warning" className="mx-1">
//       Warning
//     </Badge>
//     <Badge bg="light" className="mx-1 text-dark">
//       Light
//     </Badge>
//     <Badge bg="dark" className="mx-1">
//       Dark
//     </Badge>
//   </div>
// );

const Story = {
  title: "Components/Alert",
  component: Alert,
};

export default Story;
