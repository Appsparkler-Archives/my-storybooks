import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useCallback, useState } from "react";
import {
  FeelingEnum,
  HowAreYouFeeling,
  HowAreYouFeelingProps,
} from "./HowAreYouFeeling";

export default {
  title: "NVC App",
  component: HowAreYouFeeling,
};

const Template = () => {
  const [value, setValue] = useState<FeelingEnum>(undefined);
  const handleChange = useCallback<HowAreYouFeelingProps["onChange"]>(
    (value) => {
      setValue(value);
      action("onChange")(value);
    },
    []
  );
  return <HowAreYouFeeling value={value} onChange={handleChange} />;
};
Template.args = {};

export const howAreYouFeeling = Template.bind({});
howAreYouFeeling.args = {
  value: FeelingEnum.DISLIKE,
  onChange: console.log,
};
