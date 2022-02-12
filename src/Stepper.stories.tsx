import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NVCStepper, NVCStepperProps } from "./Stepper";

export default {
  title: "NVC App/Steppers",
  component: NVCStepper,
} as ComponentMeta<typeof NVCStepper>;

const Template: ComponentStory<typeof NVCStepper> = ({
  activeStep: step,
  onClickStep,
}) => {
  return <NVCStepper activeStep={step} onClickStep={onClickStep} />;
};
Template.args = {};

export const step0 = Template.bind({});
step0.args = {
  activeStep: 0,
} as NVCStepperProps;

export const step1 = Template.bind({});
step1.args = {
  activeStep: 1,
} as NVCStepperProps;

export const step2 = Template.bind({});
step2.args = {
  activeStep: 2,
} as NVCStepperProps;

export const step3 = Template.bind({});
step3.args = {
  activeStep: 3,
} as NVCStepperProps;
