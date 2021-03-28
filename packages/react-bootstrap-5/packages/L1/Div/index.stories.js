import React from "react";
import Div from ".";

export default {
  component: Div,
  title: "L1 Components/Div",
};

export const Default = () => {
  return (
    <Div bgPrimary textLight helloWorld>
      Hello World...
    </Div>
  );
};
