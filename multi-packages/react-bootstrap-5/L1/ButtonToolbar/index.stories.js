import React from "react";
import Button from "../Button";
import ButtonToolbar from ".";

export const Small = () => (
  <div className="d-flex gap-2 flex-column align-items-start">
    <ButtonToolbar sm>
      <Button primary>Button 1</Button>
      <Button primary>Button 2</Button>
      <Button primary>Button 3</Button>
    </ButtonToolbar>
    <ButtonToolbar sm>
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
    <ButtonToolbar sm>
      <Button warning>Button 1</Button>
      <Button success>Button 2</Button>
      <Button danger>Button 3</Button>
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
