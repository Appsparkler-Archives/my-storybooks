import React from "react";
import Badge from "./index";

export const Simple = () => (
  <div className="d-inline-flex gap-2 flex-wrap">
    <Badge primary>primary</Badge>
    <Badge secondary>secondary</Badge>
    <Badge info>info</Badge>
    <Badge success>success</Badge>
    <Badge warning>warning</Badge>
    <Badge danger>danger</Badge>
    <Badge light className="text-dark">
      light
    </Badge>
    <Badge dark>dark</Badge>
  </div>
);

export const Pill = () => (
  <div className="d-inline-flex gap-2 flex-wrap">
    <Badge primary pill>
      primary
    </Badge>
    <Badge secondary pill>
      secondary
    </Badge>
    <Badge info pill>
      info
    </Badge>
    <Badge success pill>
      success
    </Badge>
    <Badge warning pill>
      warning
    </Badge>
    <Badge danger pill>
      danger
    </Badge>
    <Badge light className="text-dark" pill>
      light
    </Badge>
    <Badge dark pill>
      dark
    </Badge>
  </div>
);

const Story = {
  title: "L1/Badge",
  component: Badge,
};

export default Story;
