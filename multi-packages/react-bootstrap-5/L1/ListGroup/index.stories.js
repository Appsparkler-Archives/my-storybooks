import React from "react";
import ListGroup, { ListGroupItem } from "./index";

const Template = (args) => (
  <ListGroup {...args}>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>An third item</ListGroupItem>
    <ListGroupItem>A fourth item</ListGroupItem>
    <ListGroupItem>And a fifth one</ListGroupItem>
  </ListGroup>
);
Template.args = {};

export const Basic = Template.bind({});
Basic.args = {
  flush: false,
};

export const WithActiveItem = () => (
  <ListGroup>
    <ListGroupItem active>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>An third item</ListGroupItem>
    <ListGroupItem>A fourth item</ListGroupItem>
    <ListGroupItem>And a fifth one</ListGroupItem>
  </ListGroup>
);

export const WithDisabledItem = () => (
  <ListGroup>
    <ListGroupItem disabled>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>An third item</ListGroupItem>
    <ListGroupItem>A fourth item</ListGroupItem>
    <ListGroupItem>And a fifth one</ListGroupItem>
  </ListGroup>
);

export const Links = () => (
  <ListGroup>
    <ListGroupItem active as="a" href="#">
      The current link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A second link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A third link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A fourth link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A disabled link item
    </ListGroupItem>
  </ListGroup>
);

export const Buttons = () => (
  <ListGroup>
    <ListGroupItem active as="button" type="button">
      The current link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A second link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A third link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A fourth link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A disabled link item
    </ListGroupItem>
  </ListGroup>
);

export const Flush = () => (
  <ListGroup flush>
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li>
  </ListGroup>
);

const Story = {
  title: "L1/List Group",
  component: ListGroup,
  subcomponents: { ListGroupItem },
};

export default Story;
