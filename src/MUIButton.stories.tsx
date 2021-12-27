import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "@mui/material/Typography";
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
  const [{ options, selectedValue }, setState] = React.useState({
    selectedValue: undefined,
    options: [
      {
        value: "like",
      },
      {
        value: "dislike",
      },
    ],
  });

  return (
    <Stack spacing={1} direction="column">
      <Typography variant="h5" component="div" gutterBottom>
          How are you feeling right now?
        </Typography>
        <Stack spacing={2} direction="row">
      {map(({ value }) => (
        <IconButton
          size="large"
          aria-label="delete"
          color={selectedValue === value ? "primary" : undefined}
          onClick={() =>
            setState((prevState) => ({
              ...prevState,
              selectedValue: value,
            }))
          }
        >
          <ThumbUpIcon />
        </IconButton>
      ))(options)}
      </Stack>
    </Stack>
  );
};

export const exampleButton = Template.bind({});
