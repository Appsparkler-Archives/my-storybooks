import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WhatAreYouFeelingProps, WhatAreYouFeeling } from "./WhatAreYouFeeling";
import { action } from "@storybook/addon-actions";
import { useCallback, useState } from "react";

export default {
  title: "NVC App",
  component: WhatAreYouFeeling,
} as ComponentMeta<typeof WhatAreYouFeeling>;

const Template: ComponentStory<typeof WhatAreYouFeeling> = ({
  value: $value,
  onChange,
  feelings,
}) => {
  const [value, setValue] = useState($value);
  const handleChange = useCallback((value) => {
    // action('onChange')(value)
    onChange(value);
    setValue(value);
  }, []);

  return (
    <WhatAreYouFeeling
      feelings={feelings}
      value={value}
      onChange={handleChange}
    />
  );
};
Template.args = {} as WhatAreYouFeelingProps;
Template.args = {};

export const whatAreYouFeeling = Template.bind({});
whatAreYouFeeling.args = {
  feelings: ["feeling 1", "feeling 2"],
  value: ["feeling 1"],
} as WhatAreYouFeelingProps;
