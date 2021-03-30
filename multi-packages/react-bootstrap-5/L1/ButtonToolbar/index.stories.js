import React from "react";
import Button from "../Button";
import ButtonToolbar from ".";
import * as ButtonGroupStories from "../ButtonGroup/index.stories";

export const Small = () => (
  <div className="d-flex gap-2 flex-column align-items-start">
    <ButtonToolbar sm className="d-flex me-3">
      <div className="btn-group me-2" role="group" aria-label="First group">
        <Button secondary outline>
          1
        </Button>
        <Button secondary outline>
          2
        </Button>
        <Button secondary outline>
          3
        </Button>
        <Button secondary outline>
          4
        </Button>
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
  </div>
);

export const Medium = () => (
  <div className="d-flex gap-2 flex-column align-items-start">
    <ButtonToolbar md>
      <Button primary>Button 1</Button>
      <Button primary>Button 2</Button>
      <Button primary>Button 3</Button>
    </ButtonToolbar>
    <ButtonToolbar md>
      <Button primary outline>
        Button 1
      </Button>
      <Button primary outline>
        Button 2
      </Button>
      <Button primary outline>
        Button 3
      </Button>
    </ButtonToolbar>
    <ButtonToolbar md>
      <Button warning>Button 1</Button>
      <Button success>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonToolbar>
  </div>
);

export const Large = () => (
  <div className="d-flex gap-2 flex-column align-items-start">
    <ButtonToolbar lg>
      <Button primary>Button 1</Button>
      <Button primary>Button 2</Button>
      <Button primary>Button 3</Button>
    </ButtonToolbar>
    <ButtonToolbar lg>
      <Button primary outline>
        Button 1
      </Button>
      <Button primary outline>
        Button 2
      </Button>
      <Button primary outline>
        Button 3
      </Button>
    </ButtonToolbar>
    <ButtonToolbar lg>
      <Button warning>Button 1</Button>
      <Button success>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonToolbar>
  </div>
);

const Story = {
  title: "l1/Button Toolbar",
  component: ButtonToolbar,
};

export default Story;
