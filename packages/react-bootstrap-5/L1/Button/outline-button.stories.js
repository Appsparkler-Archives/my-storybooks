import React from "react";
import Button from ".";

Button.defaultProps = {
  className: "",
};

export const Small = () => {
  return (
    <div className="d-flex flex-column gap-2 flex-wrap">
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
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary sm disabled outline>
          Primary
        </Button>
        <Button secondary sm disabled outline>
          Secondary
        </Button>
        <Button success sm disabled outline>
          Success
        </Button>
        <Button danger sm disabled outline>
          Danger
        </Button>
        <Button warning sm disabled outline>
          Warning
        </Button>
        <Button info sm disabled outline>
          Info
        </Button>
        <Button light sm disabled outline>
          Light
        </Button>
        <Button dark sm disabled outline>
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
        <Button primary md outline>
          Primary
        </Button>
        <Button secondary md outline>
          Secondary
        </Button>
        <Button success md outline>
          Success
        </Button>
        <Button danger md outline>
          Danger
        </Button>
        <Button warning md outline>
          Warning
        </Button>
        <Button info md outline>
          Info
        </Button>
        <Button light md outline>
          Light
        </Button>
        <Button dark md outline>
          Dark
        </Button>
      </div>
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary md disabled outline>
          Primary
        </Button>
        <Button secondary md disabled outline>
          Secondary
        </Button>
        <Button success md disabled outline>
          Success
        </Button>
        <Button danger md disabled outline>
          Danger
        </Button>
        <Button warning md disabled outline>
          Warning
        </Button>
        <Button info md disabled outline>
          Info
        </Button>
        <Button light md disabled outline>
          Light
        </Button>
        <Button dark md disabled outline>
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
        <Button primary lg outline>
          Primary
        </Button>
        <Button secondary lg outline>
          Secondary
        </Button>
        <Button success lg outline>
          Success
        </Button>
        <Button danger lg outline>
          Danger
        </Button>
        <Button warning lg outline>
          Warning
        </Button>
        <Button info lg outline>
          Info
        </Button>
        <Button light lg outline>
          Light
        </Button>
        <Button dark lg outline>
          Dark
        </Button>
      </div>
      <div className="d-flex flex-row gap-2 flex-wrap">
        <Button primary lg disabled outline>
          Primary
        </Button>
        <Button secondary lg disabled outline>
          Secondary
        </Button>
        <Button success lg disabled outline>
          Success
        </Button>
        <Button danger lg disabled outline>
          Danger
        </Button>
        <Button warning lg disabled outline>
          Warning
        </Button>
        <Button info lg disabled outline>
          Info
        </Button>
        <Button light lg disabled outline>
          Light
        </Button>
        <Button dark lg disabled outline>
          Dark
        </Button>
      </div>
    </div>
  );
};

export const ToggleStatesSmall = () => (
  <div className="d-flex flex-column align-start gap-2">
    <div className="d-flex gap-2 flex-row">
      <Button sm outline light data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        light
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        light
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm outline primary data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        primary
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        primary
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm outline info data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        info
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        info
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm outline success data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        success
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        success
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm outline warning data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        warning
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        warning
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm outline danger data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        danger
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        danger
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm outline secondary data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        secondary
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        secondary
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button sm outline dark data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        dark
        sm
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        dark
        sm
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
  </div>
);
ToggleStatesSmall.storyName = "Toggle States - Small";

export const ToggleStateMedium = () => (
  <div className="d-flex flex-column align-start gap-2">
    <div className="d-flex gap-2 flex-row">
      <Button md outline light data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        light
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        light
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md outline primary data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        primary
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        primary
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md outline info data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        info
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        info
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md outline success data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        success
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        success
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md outline warning data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        warning
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        warning
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md outline danger data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        danger
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        danger
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md outline secondary data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        secondary
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        secondary
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button md outline dark data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        dark
        md
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        dark
        md
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
  </div>
);
ToggleStateMedium.storyName = "Toggle States - Medium";

export const ToggleStateLarge = () => (
  <div className="d-flex flex-column align-start gap-2">
    <div className="d-flex gap-2 flex-row">
      <Button lg outline light data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        light
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        light
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg outline primary data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        primary
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        primary
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg outline info data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        info
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        info
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg outline success data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        success
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        success
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg outline warning data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        warning
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        warning
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg outline danger data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        danger
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        danger
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg outline secondary data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        secondary
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        secondary
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
    <div className="d-flex gap-2 flex-row">
      <Button lg outline dark data-bs-toggle="button" autoComplete="off">
        Idle
      </Button>
      <Button
        outline
        dark
        lg
        className="active"
        data-bs-toggle="button"
        autoComplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        outline
        dark
        lg
        disabled
        data-bs-toggle="button"
        autoComplete="off"
      >
        Disabled
      </Button>
    </div>
  </div>
);
ToggleStateLarge.storyName = "Toggle States - Large";

const Story = {
  title: "L1/Buttons (Outline)",
  component: Button,
};

export default Story;
