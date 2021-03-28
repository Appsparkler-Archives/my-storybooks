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
  );
};

export const Large = () => {
  return (
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
  );
};

export const Disabled = () => {
  return (
    <div className="d-flex flex-row gap-2 flex-wrap">
      <Button primary sm outline disabled>
        Primary
      </Button>
      <Button secondary sm outline disabled>
        Secondary
      </Button>
      <Button success sm outline disabled>
        Success
      </Button>
      <Button danger sm outline disabled>
        Danger
      </Button>
      <Button warning sm outline disabled>
        Warning
      </Button>
      <Button info sm outline disabled>
        Info
      </Button>
      <Button light sm outline disabled>
        Light
      </Button>
      <Button dark sm outline disabled>
        Dark
      </Button>
    </div>
  );
};

const Story = {
  title: "L1/Buttons",
  component: Button,
};

export default Story;
