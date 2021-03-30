import React from "react";
import Button from "../Button";
import ButtonGroup from "./";

export const Small = () => (
  <div className="d-flex gap-2 flex-column align-items-start">
    <ButtonGroup sm>
      <Button primary>Button 1</Button>
      <Button primary>Button 2</Button>
      <Button primary>Button 3</Button>
    </ButtonGroup>
    <ButtonGroup sm>
      <Button primary outline>
        Button 1
      </Button>
      <Button primary outline>
        Button 2
      </Button>
      <Button primary outline>
        Button 3
      </Button>
    </ButtonGroup>
    <ButtonGroup sm>
      <Button warning>Button 1</Button>
      <Button success>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  </div>
);

export const Medium = () => (
  <div className="d-flex gap-2 flex-column align-items-start">
    <ButtonGroup md>
      <Button primary>Button 1</Button>
      <Button primary>Button 2</Button>
      <Button primary>Button 3</Button>
    </ButtonGroup>
    <ButtonGroup md>
      <Button primary outline>
        Button 1
      </Button>
      <Button primary outline>
        Button 2
      </Button>
      <Button primary outline>
        Button 3
      </Button>
    </ButtonGroup>
    <ButtonGroup md>
      <Button warning>Button 1</Button>
      <Button success>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  </div>
);

export const Large = () => (
  <div className="d-flex gap-2 flex-column align-items-start">
    <ButtonGroup lg>
      <Button primary>Button 1</Button>
      <Button primary>Button 2</Button>
      <Button primary>Button 3</Button>
    </ButtonGroup>
    <ButtonGroup lg>
      <Button primary outline>
        Button 1
      </Button>
      <Button primary outline>
        Button 2
      </Button>
      <Button primary outline>
        Button 3
      </Button>
    </ButtonGroup>
    <ButtonGroup lg>
      <Button warning>Button 1</Button>
      <Button success>Button 2</Button>
      <Button danger>Button 3</Button>
    </ButtonGroup>
  </div>
);

const Story = {
  title: "l1/Button Group",
  component: ButtonGroup,
};

export default Story;
