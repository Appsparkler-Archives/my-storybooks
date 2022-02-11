import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useState } from "react";
import {
  CompleteYourStatement,
  CompleteYourStatementProps,
} from "./CompleteYourStatement";

export default {
  title: "NVC App",
  component: CompleteYourStatement,
} as ComponentMeta<typeof CompleteYourStatement>;

const Template: ComponentStory<typeof CompleteYourStatement> = ({
  value,
  onClickPrev,
  onClickNext,
  onChange,
}) => {
  const [$value, setValue] =
    useState<CompleteYourStatementProps["value"]>(value);
  const handleChange = useCallback<
    NonNullable<CompleteYourStatementProps["onChange"]>
  >(
    (value) => {
      setValue(value.target.value);
      onChange(value);
    },
    [onChange]
  );
  return (
    <CompleteYourStatement
      onChange={handleChange}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      value={$value}
    />
  );
};
Template.args = {};

export const completeYourStatement = Template.bind({});
completeYourStatement.args = {
  value:
    "I am feeling <feeling1>, <feeling2>, <feeling3> and <feeling4> because my need for need1 (sub-needs of need 1), need2 (sub-needs of need2) and need3(sub-needs of need3) are not met when...",
} as CompleteYourStatementProps;
