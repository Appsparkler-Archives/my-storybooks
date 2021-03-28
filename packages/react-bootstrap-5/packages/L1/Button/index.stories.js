import React from "react";
import Button from ".";

Button.defaultProps = {
  className: "",
};

export const Small = () => {
  return (
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

export const SmallAndOutline = () => {
  return (
    <div className="d-flex flex-row gap-2 flex-wrap">
      <Button primary sm outline>
        Primary
      </Button>
      <Button secondary sm outline>
        Secondary
      </Button>
      <Button success sm outline>
        Success
      </Button>
      <Button danger sm outline>
        Danger
      </Button>
      <Button warning sm outline>
        Warning
      </Button>
      <Button info sm outline>
        Info
      </Button>
      <Button light sm outline>
        Light
      </Button>
      <Button dark sm outline>
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
