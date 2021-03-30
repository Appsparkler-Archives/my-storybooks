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
      <Button
        sm
        type="button"
        outline
        primary
        data-bs-toggle="button"
        autocomplete="off"
      >
        Default
      </Button>
      <Button
        type="button"
        outline
        primary
        sm
        className="active"
        data-bs-toggle="button"
        autocomplete="off"
        aria-pressed="true"
      >
        Active
      </Button>
      <Button
        type="button"
        outline
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
      <Button sm type="button" light data-bs-toggle="button" autocomplete="off">
        Default
      </Button>
      <Button
        type="button"
        light
        sm
        className="active"
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
        Default
      </Button>
      <Button
        type="button"
        primary
        sm
        className="active"
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
        Default
      </Button>
      <Button
        type="button"
        info
        sm
        className="active"
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
        Default
      </Button>
      <Button
        type="button"
        success
        sm
        className="active"
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
        Default
      </Button>
      <Button
        type="button"
        warning
        sm
        className="active"
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
        Default
      </Button>
      <Button
        type="button"
        danger
        sm
        className="active"
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
        Default
      </Button>
      <Button
        type="button"
        secondary
        sm
        className="active"
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
        Default
      </Button>
      <Button
        type="button"
        dark
        sm
        className="active"
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

const Story = {
  title: "L1/Buttons (With Outline)",
  component: Button,
};

export default Story;
