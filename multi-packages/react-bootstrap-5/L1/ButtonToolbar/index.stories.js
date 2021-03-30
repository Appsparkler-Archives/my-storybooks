import React from "react";
import ButtonToolbar from "./index";

import "popper.js/dist/esm/popper";
import "bootstrap/js/dist/dropdown";

export const MixedComponents = () => (
  <div className="d-flex flex-column gap-2">
    <ButtonToolbar aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary">
          1
        </button>
        <button type="button" className="btn btn-outline-secondary">
          2
        </button>
        <button type="button" className="btn btn-outline-secondary">
          3
        </button>
        <button type="button" className="btn btn-outline-secondary">
          4
        </button>
      </div>
      <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon">
          @
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
      </div>
    </ButtonToolbar>

    <div
      className="btn-toolbar justify-content-between"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary">
          1
        </button>
        <button type="button" className="btn btn-outline-secondary">
          2
        </button>
        <button type="button" className="btn btn-outline-secondary">
          3
        </button>
        <button type="button" className="btn btn-outline-secondary">
          4
        </button>
      </div>
      <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon2">
          @
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon2"
        />
      </div>
    </div>
  </div>
);

export const Basic = () => (
  <ButtonToolbar role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group me-2" role="group" aria-label="First group">
      <button type="button" className="btn btn-primary">
        1
      </button>
      <button type="button" className="btn btn-primary">
        2
      </button>
      <button type="button" className="btn btn-primary">
        3
      </button>
      <button type="button" className="btn btn-primary">
        4
      </button>
    </div>
    <div className="btn-group me-2" role="group" aria-label="Second group">
      <button type="button" className="btn btn-secondary">
        5
      </button>
      <button type="button" className="btn btn-secondary">
        6
      </button>
      <button type="button" className="btn btn-secondary">
        7
      </button>
    </div>
    <div className="btn-group" role="group" aria-label="Third group">
      <button type="button" className="btn btn-info">
        8
      </button>
    </div>
  </ButtonToolbar>
);

const Story = {
  title: "l1/Button Toolbar",
  component: ButtonToolbar,
};

export default Story;
