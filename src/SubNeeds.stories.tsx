import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useState } from "react";
import {
  SubNeed,
  SubNeeds,
  SubNeedInterface,
  SubNeedsInterface,
} from "./SubNeeds";

export default {
  title: "NVC App",
  component: SubNeeds,
} as ComponentMeta<typeof SubNeeds>;

const Template: ComponentStory<typeof SubNeeds> = ({
  value: $value,
  onChange,
  subNeeds,
}) => {
  const [value, setValue] = useState($value);

  const handleChange = useCallback((value) => {
    setValue(value);
    onChange(value);
  }, []);

  return <SubNeeds value={value} subNeeds={subNeeds} onChange={handleChange} />;
};
Template.args = {};

// export const subNeed = Template.bind({});
// subNeed.args = {
//   subNeed: "sub need 1",
//   value: ["sub need 1", "sub need 2"],
// } as SubNeedInterface;

export const subNeeds: ComponentStory<typeof SubNeeds> = Template.bind({});
subNeeds.args = {
  subNeeds: [
    "sub need 1",
    "sub need 2",
    "sub need 3",
    "sub need 4",
    "sub need 5",
    "sub need 6",
  ],
  value: ["sub need 1"],
} as SubNeedsInterface;
