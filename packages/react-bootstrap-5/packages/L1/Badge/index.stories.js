import React from "react";
import Badge from "./index";

export const All = () => (
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

const Story = {
  title: "L1/Badge",
  component: Badge,
};

export default Story;
