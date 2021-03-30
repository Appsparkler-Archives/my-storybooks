import React from "react";
import * as ButtonStories from "./Button/index.stories";
import * as ButtonOutlineStories from "./Button/outline-button.stories";
import * as BadgeStories from "./Badge/index.stories";
import * as AlertStories from "./Alert/index.stories";
import * as ButtonGroupStories from "./ButtonGroup/index.stories";

export const AllComponentsCombo = () => (
  <div className="d-flex flex-column gap-4">
    {/* Buttons */}
    <div className="p-3 shadow shadow-md bg-light">
      <div className="d-flex flex-column gap-3">
        <h3>Buttons</h3>
        <ButtonStories.Small />
        <ButtonStories.Medium />
        <ButtonStories.Large />
        <ButtonStories.ToggleStatesSmall />
        <ButtonStories.ToggleStatesMedium />
        <ButtonStories.ToggleStatesLarge />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-dark">
      <div className="d-flex flex-column gap-3">
        <h3 className="text-light">Buttons</h3>
        <ButtonStories.Small />
        <ButtonStories.Medium />
        <ButtonStories.Large />
        <ButtonStories.ToggleStatesSmall />
        <ButtonStories.ToggleStatesMedium />
        <ButtonStories.ToggleStatesLarge />
      </div>
    </div>

    {/* Buttons - Outline */}
    <div className="p-3 shadow shadow-md bg-light">
      <div className="d-flex flex-column gap-3">
        <h3>Buttons With Outline</h3>
        <ButtonOutlineStories.Small />
        <ButtonOutlineStories.Medium />
        <ButtonOutlineStories.Large />
        <ButtonOutlineStories.ToggleStatesSmall />
        <ButtonOutlineStories.ToggleStateMedium />
        <ButtonOutlineStories.ToggleStateLarge />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-dark">
      <div className="d-flex flex-column gap-3">
        <h3 className="text-light">Buttons With Outline</h3>
        <ButtonOutlineStories.Small />
        <ButtonOutlineStories.Medium />
        <ButtonOutlineStories.Large />
        <ButtonOutlineStories.ToggleStatesSmall />
        <ButtonOutlineStories.ToggleStateMedium />
        <ButtonOutlineStories.ToggleStateLarge />
      </div>
    </div>

    {/* Badge Stories */}
    <div className="p-3 shadow shadow-md bg-light">
      <div className="d-flex flex-column gap-3">
        <h3>Badges</h3>
        <BadgeStories.Simple />
        <BadgeStories.Pill />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-dark">
      <div className="d-flex flex-column gap-3">
        <h3 className="text-light">Badges</h3>
        <BadgeStories.Simple />
        <BadgeStories.Pill />
      </div>
    </div>

    {/* Alert Stories */}
    <div className="p-3 shadow shadow-md bg-light">
      <div className="d-flex flex-column gap-3">
        <h3>Alerts</h3>
        <AlertStories.Basic />
        <h3>Alerts - Dismissable</h3>
        <AlertStories.Dismissable />
        <h3>Alerts - Dismissable - With Alert Links</h3>
        <AlertStories.WithAlertLink />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-dark">
      <div className="d-flex flex-column gap-3">
        <h3 className="text-light">Alerts</h3>
        <AlertStories.Basic />
        <h3 className="text-light">Alerts - Dismissable</h3>
        <AlertStories.Dismissable />
        <h3 className="text-light">Alerts - Dismissable - With Alert Links</h3>
        <AlertStories.WithAlertLink />
      </div>
    </div>

    {/* Button Group Stories */}
    <div className="p-3 shadow shadow-md bg-light">
      <div className="d-flex flex-column gap-3 align-items-start">
        <h3>Button Groups</h3>
        <ButtonGroupStories.Small />
        <ButtonGroupStories.Medium />
        <ButtonGroupStories.Large />
        <ButtonGroupStories.Dropdown />
        <ButtonGroupStories.Nesting />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-dark">
      <div className="d-flex flex-column gap-3 align-items-start">
        <h3 className="text-light">Button Groups</h3>
        <ButtonGroupStories.Small />
        <ButtonGroupStories.Medium />
        <ButtonGroupStories.Large />
        <ButtonGroupStories.Dropdown />
        <ButtonGroupStories.Nesting />
      </div>
    </div>
  </div>
);

const Story = {
  title: "L1",
};

export default Story;
