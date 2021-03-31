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

export const ToggleStatesSmall = () => (
  <div className="d-flex flex-column align-start gap-2">
    <div className="d-flex gap-2 flex-row">
      <Button sm type="button" light data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        light
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        light
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        sm
        type="button"
        primary
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        primary
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        primary
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm type="button" info data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        info
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        info
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        sm
        type="button"
        success
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        success
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        success
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        sm
        type="button"
        warning
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        warning
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        warning
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        sm
        type="button"
        danger
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        danger
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        danger
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        sm
        type="button"
        secondary
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        secondary
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        secondary
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm type="button" dark data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        dark
        sm
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        dark
        sm
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
  </div>
);
ToggleStatesSmall.storyName = "Toggle States - Small";

export const ToggleStatesMedium = () => (
  <div className="d-flex flex-column align-start gap-2">
    <div className="d-flex gap-2 flex-row">
      <Button md type="button" light data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        light
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        light
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        md
        type="button"
        primary
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        primary
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        primary
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md type="button" info data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        info
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        info
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        md
        type="button"
        success
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        success
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        success
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        md
        type="button"
        warning
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        warning
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        warning
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        md
        type="button"
        danger
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        danger
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        danger
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        md
        type="button"
        secondary
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        secondary
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        secondary
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md type="button" dark data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        dark
        md
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        dark
        md
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
  </div>
);
ToggleStatesMedium.storyName = "Toggle States - Medium";

export const ToggleStatesLarge = () => (
  <div className="d-flex flex-column align-start gap-2">
    <div className="d-flex gap-2 flex-row">
      <Button lg type="button" light data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        light
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        light
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        lg
        type="button"
        primary
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        primary
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        primary
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg type="button" info data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        info
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        info
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        lg
        type="button"
        success
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        success
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        success
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        lg
        type="button"
        warning
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        warning
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        warning
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        lg
        type="button"
        danger
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        danger
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        danger
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button
        lg
        type="button"
        secondary
        data-bs-toggle="button"
        autocomplete="off"
      >
        Idle
      </Button>
      <Button
        type="button"
        secondary
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        secondary
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg type="button" dark data-bs-toggle="button" autocomplete="off">
        Idle
      </Button>
      <Button
        type="button"
        dark
        lg
        active
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        dark
        lg
        disabled
        data-bs-toggle="button"
        autocomplete="off"
      >
        Disabled
      </Button>
    </div>
  </div>
);
ToggleStatesLarge.storyName = "Toggle States - Large";

export const LinkButton = () => (
  <Button as="a" primary href="https://www.google.com" target="__blank">
    www.google.com
  </Button>
);

const Story = {
  title: "L1/Buttons",
  component: Button,
};

export default Story;
