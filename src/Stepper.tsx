import * as React from "react";
import styled from "@mui/material/styles/styled";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import HelpIcon from "@mui/icons-material/Help";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavouriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import { StepIconProps } from "@mui/material/StepIcon";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { noop } from "lodash/fp";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

// eslint-disable-next-line react/no-multi-comp
function ColorlibStepIcon({
  icon,
  active,
  completed,
  className,
}: StepIconProps) {
  const icons: { [index: string]: React.ReactElement } = {
    1: <HelpIcon />,
    2: <FavouriteIcon />,
    3: <PsychologyIcon />,
    4: <ChatBubbleIcon />,
  };

  return (
    <ColorlibStepIconRoot
      className={className}
      ownerState={{ completed, active }}
    >
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "How are you?",
  "What are you feeling?",
  "Which need is met?",
  "Complete your statement",
];

export type NVCStepperProps = {
  activeStep: number;
  onClickStep?: (step: any) => void;
};

export const NVCStepper = ({
  activeStep = 0,
  onClickStep = noop,
}: NVCStepperProps) => {
  const sx = React.useCallback<
    (currentStep: number) => NonNullable<TypographyProps["sx"]>
  >(
    (currentStep) => {
      return {
        fontWeight: currentStep === activeStep ? "bold !important" : "normal",
      };
    },
    [activeStep]
  );
  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={(props) => (
                <IconButton onClick={() => onClickStep(props)}>
                  <ColorlibStepIcon {...props} />
                </IconButton>
              )}
            >
              <Typography sx={sx(index)}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
