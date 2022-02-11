import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useState } from "react";
import { WhatAreYouFeeling, WhatAreYouFeelingProps } from "./WhatAreYouFeeling";
import { FormControlLabelItem } from "./SubNeeds";
import { goodFeelings } from "./data";

export default {
  title: "NVC App",
  component: WhatAreYouFeeling,
} as ComponentMeta<typeof WhatAreYouFeeling>;

const Template: ComponentStory<typeof WhatAreYouFeeling> = ({
  onClickNext,
  feelings,
  onClickPrev,
  onChangeFeelings,
}) => {
  const [value, setValue] = useState<FormControlLabelItem[]>(feelings);
  const handleChange = useCallback<WhatAreYouFeelingProps["onChangeFeelings"]>(
    (value) => {
      setValue(value);
      // action("onChange")(value);
      onChangeFeelings(value, "what-are-you-feeling");
    },
    [onChangeFeelings]
  );
  return (
    <WhatAreYouFeeling
      feelings={value}
      onChangeFeelings={handleChange}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
    />
  );
};
Template.args = {};

export const whatAreYouFeeling = Template.bind({});
whatAreYouFeeling.args = {
  feelings: goodFeelings,
} as WhatAreYouFeelingProps;
