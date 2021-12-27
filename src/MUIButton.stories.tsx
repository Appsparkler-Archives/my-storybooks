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
export const HowAreYouFeeling = ({ value: $value, onChange }) => {
  const options = React.useMemo(() => ["like", "dislike"], []);

  return (
    <Stack spacing={1} direction="column">
      <Typography variant="h5" component="div" gutterBottom>
        How are you?
      </Typography>
      <Stack spacing={2} direction="row">
        {map((value) => (
          <IconButton
            size="large"
            aria-label="delete"
            color={$value === value ? "primary" : undefined}
            onClick={() => onChange(value)}
          >
            {value === "like" && <ThumbUpIcon />}
            {value === "dislike" && <ThumbDownIcon />}
          </IconButton>
        ))(options)}
      </Stack>
    </Stack>
  );
};

export const Template = () => {
  const [{ feeling }, setState] = React.useState({
    feeling: undefined,
  });

  return (
    <Stack spacing={1} direction="column">
      <HowAreYouFeeling
        value={feeling}
        onChange={(value) =>
          setState((prevState) => ({ ...prevState, feeling: value }))
        }
      />
    </Stack>
  );
};

export const exampleButton = Template.bind({});
