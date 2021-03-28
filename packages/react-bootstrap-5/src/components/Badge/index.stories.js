import React from "react";
import useBootstrapUtilities from "./useBootstrapUtilities";
const Div = ({ children, className, ...props }) => {
  const utilitiyClasses = useBootstrapUtilities(props);
  return <div className={`${utilitiyClasses} ${className}`}>{children}</div>;
};
const Badge = ({ children, className, ...props }) => {
  return (
    <Div {...props} className={`badge ${className}`}>
      {children}
    </Div>
  );
};
const RoundedPillBadge = ({ children, className, ...props }) => {
  return (
    <Badge {...props} className={`rounded-pill ${className}`}>
      {children}
    </Badge>
  );
};
const Template = ({ children, ...args }) => (
  <RoundedPillBadge {...args}>{children}</RoundedPillBadge>
);
Template.args = {
  pill: false,
  children: "Primary",
  className: "",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Template.args,
  bgPrimary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Template.args,
  bgSecondary: true,
};

export const Success = Template.bind({});
Success.args = {
  ...Template.args,
  bgSuccess: true,
};
export const Info = Template.bind({});
Info.args = {
  ...Template.args,
  bgInfo: true,
};

export const Danger = Template.bind({});
Danger.args = {
  ...Template.args,
  bgDanger: true,
};

export const Warning = Template.bind({});
Warning.args = {
  ...Template.args,
  bgWarning: true,
};

export const Light = Template.bind({});
Light.args = {
  ...Template.args,
  bgLight: true,
  className: "text-dark",
};

export const Dark = Template.bind({});
Dark.args = {
  ...Template.args,
  bgDark: true,
};

export const All = () => (
  <div className="d-flex gap-2">
    <Badge {...Template.args}>default</Badge>
    <Badge {...Primary.args}>primary</Badge>
    <Badge {...Secondary.args}>secondary</Badge>
    <Badge {...Success.args}>success</Badge>
    <Badge {...Info.args}>info</Badge>
    <Badge {...Warning.args}>warning</Badge>
    <Badge {...Danger.args}>danger</Badge>
    <Badge {...Light.args}>light</Badge>
    <Badge {...Dark.args}>dark</Badge>
  </div>
);

const Story = {
  title: "Components/Badge",
  component: Badge,
};

export default Story;
