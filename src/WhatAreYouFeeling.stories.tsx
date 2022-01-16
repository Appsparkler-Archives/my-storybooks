import { ComponentMeta, Meta, ComponentStory } from "@storybook/react";
import { WhatAreYouFeelingProps, WhatAreYouFeeling } from "./WhatAreYouFeeling";

export default {
  title: "NVC App",
  component: WhatAreYouFeeling,
} as ComponentMeta<typeof WhatAreYouFeeling>;

const Template: ComponentStory<typeof WhatAreYouFeeling> = (args) => (
  <WhatAreYouFeeling {...args} />
);
Template.args = {} as WhatAreYouFeelingProps;
Template.args = {};

export const whatAreYouFeeling = Template.bind({});
whatAreYouFeeling.args = {
  feelings: ["feeling 1", "feeling 2"],
  value: ["feeling 1"],
} as WhatAreYouFeelingProps;
