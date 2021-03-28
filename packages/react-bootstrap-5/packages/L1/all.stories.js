import React from "react";
import * as ButtonStories from "./Button/index.stories";
import * as ButtonOutlineStories from "./Button/button.stories";
import * as BadgeStories from "./Badge/index.stories";
export const Everything = () => (
  <div className="d-flex flex-column gap-4">
    <div className="p-3 shadow shadow-md bg-light">
      <div className="d-flex flex-column gap-3">
        <h3>Buttons</h3>
        <ButtonStories.Small />
        <ButtonStories.Medium />
        <ButtonStories.Large />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-dark">
      <div className="d-flex flex-column gap-3">
        <h3 className="text-light">Buttons</h3>
        <ButtonStories.Small />
        <ButtonStories.Medium />
        <ButtonStories.Large />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-light">
      <div className="d-flex flex-column gap-3">
        <h3>Buttons With Outline</h3>
        <ButtonOutlineStories.Small />
        <ButtonOutlineStories.Medium />
        <ButtonOutlineStories.Large />
      </div>
    </div>
    <div className="p-3 shadow shadow-md bg-dark">
      <div className="d-flex flex-column gap-3">
        <h3 className="text-light">Buttons With Outline</h3>
        <ButtonOutlineStories.Small />
        <ButtonOutlineStories.Medium />
        <ButtonOutlineStories.Large />
      </div>
    </div>
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
  </div>
);

const Story = {
  title: "L1/All Components",
};

export default Story;
