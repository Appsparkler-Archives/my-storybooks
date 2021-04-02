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
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>A third item</ListGroupItem>
    <ListGroupItem>A fourth item</ListGroupItem>
    <ListGroupItem>And a fifth one</ListGroupItem>
  </ListGroup>
);

export const Horizontal = () => (
  <>
    <ListGroup horizontal>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
    <ListGroup horizontal sm>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
    <ListGroup horizontal md>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
    <ListGroup horizontal lg>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
    <ListGroup horizontal xl>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
    <ListGroup horizontal xxl>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
  </>
);

export const ContextualClasses = () => (
  <ListGroup>
    <ListGroupItem>A simple default list group item</ListGroupItem>
    <ListGroupItem primary>A simple primary list group item</ListGroupItem>
    <ListGroupItem secondary>A simple secondary list group item</ListGroupItem>
    <ListGroupItem success>A simple success list group item</ListGroupItem>
    <ListGroupItem danger> A simple danger list group item</ListGroupItem>
    <ListGroupItem warning>A simple warning list group item</ListGroupItem>
    <ListGroupItem info>A simple info list group item</ListGroupItem>
    <ListGroupItem light>A simple light list group item</ListGroupItem>
    <ListGroupItem dark>A simple dark list group item</ListGroupItem>
  </ListGroup>
);

export const ContextualClassesWithLinks = () => (
  <ListGroup as="div">
    <ListGroupItem as="a" href="#">
      A simple default list group item
    </ListGroupItem>
    <ListGroupItem primary as="a" href="#">
      A simple primary list group item
    </ListGroupItem>
    <ListGroupItem secondary as="a" href="#">
      A simple secondary list group item
    </ListGroupItem>
    <ListGroupItem success as="a" href="#">
      A simple success list group item
    </ListGroupItem>
    <ListGroupItem danger as="a" href="#">
      {" "}
      A simple danger list group item
    </ListGroupItem>
    <ListGroupItem warning as="a" href="#">
      A simple warning list group item
    </ListGroupItem>
    <ListGroupItem info as="a" href="#">
      A simple info list group item
    </ListGroupItem>
    <ListGroupItem light as="a" href="#">
      A simple light list group item
    </ListGroupItem>
    <ListGroupItem dark as="a" href="#">
      A simple dark list group item
    </ListGroupItem>
  </ListGroup>
);

export const ContextualClassesWithButtons = () => (
  <ListGroup as="div">
    <ListGroupItem as="button" href="#">
      A simple default list group item
    </ListGroupItem>
    <ListGroupItem primary as="button" href="#">
      A simple primary list group item
    </ListGroupItem>
    <ListGroupItem secondary as="button" href="#">
      A simple secondary list group item
    </ListGroupItem>
    <ListGroupItem success as="button" href="#">
      A simple success list group item
    </ListGroupItem>
    <ListGroupItem danger as="button" href="#">
      {" "}
      A simple danger list group item
    </ListGroupItem>
    <ListGroupItem warning as="button" href="#">
      A simple warning list group item
    </ListGroupItem>
    <ListGroupItem info as="button" href="#">
      A simple info list group item
    </ListGroupItem>
    <ListGroupItem light as="button" href="#">
      A simple light list group item
    </ListGroupItem>
    <ListGroupItem dark as="button" href="#">
      A simple dark list group item
    </ListGroupItem>
  </ListGroup>
);

export const CustomContent1 = () => (
  <ListGroup>
    <ListGroupItem className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <span className="badge bg-primary rounded-pill">14</span>
    </ListGroupItem>
    <ListGroupItem className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <span className="badge bg-primary rounded-pill">14</span>
    </ListGroupItem>
    <ListGroupItem className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <span className="badge bg-primary rounded-pill">14</span>
    </ListGroupItem>
  </ListGroup>
);

export const CustomContent2 = () => (
  <ListGroup>
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      A list item
      <span className="badge bg-primary rounded-pill">14</span>
    </ListGroupItem>
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      A second list item
      <span className="badge bg-primary rounded-pill">2</span>
    </ListGroupItem>
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      A third list item
      <span className="badge bg-primary rounded-pill">1</span>
    </ListGroupItem>
  </ListGroup>
);

export const CustomContent3 = () => (
  <ListGroup as="div">
    <ListGroupItem as="a" active href="#" aria-current="true">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p className="mb-1">Some placeholder content in a paragraph.</p>
      <small>And some small print.</small>
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">List group item heading</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">Some placeholder content in a paragraph.</p>
      <small className="text-muted">And some muted small print.</small>
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">List group item heading</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">Some placeholder content in a paragraph.</p>
      <small className="text-muted">And some muted small print.</small>
    </ListGroupItem>
  </ListGroup>
);

export const Checkboxes = () => (
  <ListGroup>
    <ListGroupItem>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
      />
      First checkbox
    </ListGroupItem>
    <ListGroupItem>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
      />
      Second checkbox
    </ListGroupItem>
    <ListGroupItem>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
      />
      Third checkbox
    </ListGroupItem>
    <ListGroupItem>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
      />
      Fourth checkbox
    </ListGroupItem>
    <ListGroupItem>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
      />
      Fifth checkbox
    </ListGroupItem>
  </ListGroup>
);

export const CheckboxesWithLargeHitArea = () => (
  <ListGroup as="div">
    <ListGroupItem as="label">
      <input className="form-check-input me-1" type="checkbox" value="" />
      First checkbox
    </ListGroupItem>
    <ListGroupItem as="label">
      <input className="form-check-input me-1" type="checkbox" value="" />
      Second checkbox
    </ListGroupItem>
    <ListGroupItem as="label">
      <input className="form-check-input me-1" type="checkbox" value="" />
      Third checkbox
    </ListGroupItem>
    <ListGroupItem as="label">
      <input className="form-check-input me-1" type="checkbox" value="" />
      Fourth checkbox
    </ListGroupItem>
    <ListGroupItem as="label">
      <input className="form-check-input me-1" type="checkbox" value="" />
      Fifth checkbox
    </ListGroupItem>
  </ListGroup>
);
const Story = {
  title: "L1/List Group",
  component: ListGroup,
  subcomponents: { ListGroupItem },
};

export default Story;
