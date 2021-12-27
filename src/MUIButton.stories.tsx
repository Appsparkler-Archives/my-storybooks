import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
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
    <Stack spacing={0} direction="column">
      <Typography variant="h5" component="div" gutterBottom>
        How are you?
      </Typography>
      <Stack spacing={0} direction="row">
        {map<string, any>((value) => (
          <Radio
            key={value}
            name="feeling"
            value={value}
            checked={value === $value}
            icon={value === "like" ? <ThumbUpIcon /> : <ThumbDownIcon />}
            checkedIcon={
              value === "like" ? (
                <ThumbUpIcon color="primary" />
              ) : (
                <ThumbDownIcon color="primary" />
              )
            }
            onChange={(evt) => onChange(evt.target.value)}
          />
        ))(options)}
      </Stack>
    </Stack>
  );
};

export const NeedsList = () => {
  return (
    <Radio
      icon={<ThumbUpIcon />}
      checkedIcon={<ThumbUpIcon color="primary" />}
    />
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
      <Typography variant="h4" children={feeling} />
    </Stack>
  );
};

export const exampleButton = Template.bind({});
