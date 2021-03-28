import React from "react";
import Button from ".";

Button.defaultProps = {
  className: "",
};

export const Small = () => {
  return (
    <div className="d-flex flex-column gap-2 flex-wrap">
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary sm>
          Primary
        </Button>
        <Button secondary sm>
          Secondary
        </Button>
        <Button success sm>
          Success
        </Button>
        <Button danger sm>
          Danger
        </Button>
        <Button warning sm>
          Warning
        </Button>
        <Button info sm>
          Info
        </Button>
        <Button light sm>
          Light
        </Button>
        <Button dark sm>
          Dark
        </Button>
      </div>
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary sm disabled>
          Primary
        </Button>
        <Button secondary sm disabled>
          Secondary
        </Button>
        <Button success sm disabled>
          Success
        </Button>
        <Button danger sm disabled>
          Danger
        </Button>
        <Button warning sm disabled>
          Warning
        </Button>
        <Button info sm disabled>
          Info
        </Button>
        <Button light sm disabled>
          Light
        </Button>
        <Button dark sm disabled>
          Dark
        </Button>
      </div>
    </div>
  );
};

export const Medium = () => {
  return (
    <div className="d-flex flex-column gap-2 flex-wrap">
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary md>
          Primary
        </Button>
        <Button secondary md>
          Secondary
        </Button>
        <Button success md>
          Success
        </Button>
        <Button danger md>
          Danger
        </Button>
        <Button warning md>
          Warning
        </Button>
        <Button info md>
          Info
        </Button>
        <Button light md>
          Light
        </Button>
        <Button dark md>
          Dark
        </Button>
      </div>
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary md disabled>
          Primary
        </Button>
        <Button secondary md disabled>
          Secondary
        </Button>
        <Button success md disabled>
          Success
        </Button>
        <Button danger md disabled>
          Danger
        </Button>
        <Button warning md disabled>
          Warning
        </Button>
        <Button info md disabled>
          Info
        </Button>
        <Button light md disabled>
          Light
        </Button>
        <Button dark md disabled>
          Dark
        </Button>
      </div>
    </div>
  );
};

export const Large = () => {
  return (
    <div className="d-flex flex-column gap-2 flex-wrap">
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary lg>
          Primary
        </Button>
        <Button secondary lg>
          Secondary
        </Button>
        <Button success lg>
          Success
        </Button>
        <Button danger lg>
          Danger
        </Button>
        <Button warning lg>
          Warning
        </Button>
        <Button info lg>
          Info
        </Button>
        <Button light lg>
          Light
        </Button>
        <Button dark lg>
          Dark
        </Button>
      </div>
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary lg disabled>
          Primary
        </Button>
        <Button secondary lg disabled>
          Secondary
        </Button>
        <Button success lg disabled>
          Success
        </Button>
        <Button danger lg disabled>
          Danger
        </Button>
        <Button warning lg disabled>
          Warning
        </Button>
        <Button info lg disabled>
          Info
        </Button>
        <Button light lg disabled>
          Light
        </Button>
        <Button dark lg disabled>
          Dark
        </Button>
      </div>
    </div>
  );
};

const Story = {
  title: "L1/Buttons",
  component: Button,
};

export default Story;
