import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useState } from "react";
import { needs } from "./data";
import { SectionTitle, SectionTitleProps } from "./SectionTitle";

export default {
  title: "NVC App/Section Title",
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = ({
  children,
  leftSideChildren,
}) => {
  return (
    <SectionTitle children={children} leftSideChildren={leftSideChildren} />
  );
};
Template.args = {
  children: "This is the section title",
};

export const defaults = Template.bind({});
defaults.args = {
  ...Template.args,
} as SectionTitleProps;

export const withButtons = Template.bind({});
withButtons.args = {
  ...Template.args,
  leftSideChildren: (
    <Box gap={2} display={"flex"}>
      <Button>PREV</Button>
      <Button variant="contained">NEXT</Button>
    </Box>
  ),
};
