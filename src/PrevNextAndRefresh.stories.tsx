import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  PrevNextAndRefresh,
  PrevNextAndRefreshProps,
} from "./PrevNextAndRefresh";

export default {
  title: "NVC App",
  component: PrevNextAndRefresh,
} as ComponentMeta<typeof PrevNextAndRefresh>;

const Template: ComponentStory<typeof PrevNextAndRefresh> = ({
  isNextDisabled,
  onClickNext,
  onClickPrev,
  onClickRefresh,
}) => {
  return (
    <PrevNextAndRefresh
      isNextDisabled={isNextDisabled}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onClickRefresh={onClickRefresh}
    />
  );
};
Template.args = {};

export const prevNextAndRefresh = Template.bind({});
prevNextAndRefresh.args = {
  isNextDisabled: true,
} as PrevNextAndRefreshProps;
