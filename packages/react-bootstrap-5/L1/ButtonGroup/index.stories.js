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

export const Dropdown = () => (
  <div className="d-flex flex-column gap-2 align-items-start">
    <ButtonGroup role="group" sm>
      <button
        id="btnGroupDrop1"
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
      </ul>
    </ButtonGroup>
    <ButtonGroup role="group" md>
      <button
        id="btnGroupDrop1"
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
      </ul>
    </ButtonGroup>
    <ButtonGroup role="group" lg>
      <button
        id="btnGroupDrop1"
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
      </ul>
    </ButtonGroup>
  </div>
);

export const Nesting = () => (
  <ButtonGroup role="group" aria-label="Button group with nested dropdown">
    <button type="button" className="btn btn-primary">
      1
    </button>
    <button type="button" className="btn btn-primary">
      2
    </button>

    <ButtonGroup role="group">
      <button
        id="btnGroupDrop1"
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Dropdown link
          </a>
        </li>
      </ul>
    </ButtonGroup>
  </ButtonGroup>
);

const Story = {
  title: "l1/Button Groups",
  component: ButtonGroup,
};

export default Story;
