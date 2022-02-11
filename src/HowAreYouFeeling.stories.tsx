import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useState } from "react";
import {
  FeelingEnum,
  HowAreYouFeeling,
  HowAreYouFeelingProps,
} from "./HowAreYouFeeling";

export default {
  title: "NVC App",
  component: HowAreYouFeeling,
} as ComponentMeta<typeof HowAreYouFeeling>;

const Template: ComponentStory<typeof HowAreYouFeeling> = ({
  onClickNext,
  onChange,
}) => {
  const [value, setValue] = useState<FeelingEnum | undefined>(undefined);
  const handleChange = useCallback<HowAreYouFeelingProps["onChange"]>(
    (value) => {
      setValue(value);
      // action("onChange")(value);
      onChange(value);
    },
    [onChange]
  );
  return (
    <HowAreYouFeeling
      onChange={handleChange}
      onClickNext={onClickNext}
      value={value}
    />
  );
};
Template.args = {};

export const howAreYouFeeling = Template.bind({});
howAreYouFeeling.args = {
  value: FeelingEnum.DISLIKE,
  onChange: console.log,
};
