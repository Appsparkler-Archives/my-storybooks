import React from "react";
import Breadcrumb from "./index";

const Template = (args) => <Breadcrumb {...args} />;
Template.args = {
  ariaLabel: "breadcrumb",
  items: [
    {
      id: "3oeowedd",
      href: "http://google.com",
      text: "Home",
      active: false,
      ariaLabel: false,
    },
    {
      id: "3oeowedx",
      href: "http://google.com",
      text: "Blogs",
      ariaLabel: "blogs",
      active: true,
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};
const Story = {
  title: "L1/Components",
  component: Breadcrumb,
};

export default Story;
