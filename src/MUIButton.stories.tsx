import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import map from "lodash/fp/map";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MUI Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template = () => {
  const [{ options }, setState] = React.useState({
    options: [1, 2, 3],
  });
  return (
    <Stack spacing={2} direction="row">
      {map((option) => (
        <label>
          <input type="radio" defaultChecked={option === 1} />
        </label>
      ))(options)}
      <IconButton aria-label="delete" color="primary">
        <ThumbUpIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <ThumbDownIcon />
      </IconButton>
    </Stack>
  );
};

export const exampleButton = Template.bind({});
