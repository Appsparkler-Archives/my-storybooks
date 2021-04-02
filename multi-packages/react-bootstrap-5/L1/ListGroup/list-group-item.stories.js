import React from "react";
import ListGroup, { ListGroupItem } from "./index";

const Template = (args) => (
  <ListGroup as={args.listGroupAs}>
    <ListGroupItem {...args}>List Group Item</ListGroupItem>
  </ListGroup>
);
Template.args = {
  as: "ol",
  listGroupAs: "ol",
};

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "L1/List Group/List Group Item",
  component: ListGroupItem,
};

export default Story;
