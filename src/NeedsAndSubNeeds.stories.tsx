import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useState } from "react";
import { needs } from "./data";
import { NeedAndSubNeeds, NeedsAndSubNeedsProps } from "./NeedsAndSubNeeds";

export default {
  title: "NVC App",
  component: NeedAndSubNeeds,
} as ComponentMeta<typeof NeedAndSubNeeds>;

const Template: ComponentStory<typeof NeedAndSubNeeds> = ({
  id,
  onChange,
  onClickPrev,
  onClickNext,
  value,
}) => {
  const [$value, setValue] = useState<NeedsAndSubNeedsProps["value"]>(value);

  const handleChange = useCallback<NeedsAndSubNeedsProps["onChange"]>(
    (updatedNeeds, id) => {
      setValue(updatedNeeds);
      onChange(updatedNeeds, id);
    },
    [onChange]
  );

  return (
    <NeedAndSubNeeds
      id={id}
      onChange={handleChange}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      value={$value}
    />
  );
};
Template.args = {};

export const needAndSubNeeds = Template.bind({});
needAndSubNeeds.args = {
  id: "1",
  value: needs,
} as NeedsAndSubNeedsProps;
