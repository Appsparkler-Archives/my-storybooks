import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FeelingEnum,
  HowAreYouFeeling,
  HowAreYouFeelingProps,
} from "./HowAreYouFeeling";
import {
  NeedStatus,
  NVCStepper,
  NVCStepperProps,
  StepIconEnum,
} from "./Stepper";
import { FormControlLabelItem, SubNeedsProps } from "./SubNeeds";
import { WhatAreYouFeeling, WhatAreYouFeelingProps } from "./WhatAreYouFeeling";
import {
  Need,
  NeedAndSubNeeds,
  NeedsAndSubNeedsProps,
} from "./NeedsAndSubNeeds";
import {
  CompleteYourStatement,
  CompleteYourStatementProps,
} from "./CompleteYourStatement";
import {
  filterOutUncheckedNeeds,
  pipeFeelingsToString,
  reduceNeedToNeedStatement,
  someFeelingsAreChecked,
  someNeedsAreChecked,
} from "./utils";
import { goodFeelings, needs, notSoGoodFeelings } from "./data";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ChatBubble from "@mui/icons-material/ChatBubbleOutline";
import Favorite from "@mui/icons-material/FavoriteBorder";

export type AppState = {
  feeling?: FeelingEnum;
  activeStep: ActiveStep;
  feelings: FormControlLabelItem[];
  needAndSubNeeds: Need[];
};

enum ActiveStep {
  HowAreYouFeeling = 0,
  WhatAreYouFeeling = 1,
  WhyAreYouFeeling = 2,
  CompleteYourStatement = 3,
}

export const App = () => {
  const [{ feeling, activeStep, feelings, needAndSubNeeds }, setState] =
    useState<AppState>({
      feeling: undefined,
      activeStep: ActiveStep.HowAreYouFeeling,
      feelings: [],
      needAndSubNeeds: needs,
    });
  const [statement, setStatement] =
    useState<CompleteYourStatementProps["value"]>();

  const needStatus = useMemo<NeedStatus | undefined>(() => {
    if (!feeling) return undefined;
    if (feeling === FeelingEnum.LIKE) return NeedStatus.MET;
    if (feeling === FeelingEnum.DISLIKE) return NeedStatus.UNMET;
  }, [feeling]);

  const handleChangeFeeling = useCallback<HowAreYouFeelingProps["onChange"]>(
    (feeling) => {
      setState((prevState) => ({
        ...prevState,
        feeling,
        feelings:
          feeling === FeelingEnum.LIKE ? goodFeelings : notSoGoodFeelings,
      }));
    },
    []
  );

  const onClickNextOnHowAreYouFeeling = useCallback<
    HowAreYouFeelingProps["onClickNext"]
  >(() => {
    setState((prevState) => ({
      ...prevState,
      activeStep: ActiveStep.WhatAreYouFeeling,
    }));
  }, []);

  const onChangeFeelings = useCallback<SubNeedsProps["onChange"]>(
    (feelings) => {
      setState((prevState) => ({
        ...prevState,
        feelings,
      }));
    },
    []
  );

  const onClickPrevWhatAreYouFeeling = useCallback<
    WhatAreYouFeelingProps["onClickPrev"]
  >(() => {
    setState((prevState) => ({
      ...prevState,
      activeStep: ActiveStep.HowAreYouFeeling,
    }));
  }, []);

  const onClickNextWhatAreYouFeeling = useCallback<
    WhatAreYouFeelingProps["onClickNext"]
  >(() => {
    setState((prevState) => ({
      ...prevState,
      activeStep: ActiveStep.WhyAreYouFeeling,
    }));
  }, []);

  const handleChangeNeedAndSubneeds = useCallback<
    NeedsAndSubNeedsProps["onChange"]
  >((needAndSubNeeds) => {
    setState((prevState) => ({
      ...prevState,
      needAndSubNeeds,
    }));
  }, []);

  const handleOnClickPrevNeedAndSubneeds = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    setState((prevState) => ({
      ...prevState,
      activeStep: ActiveStep.WhatAreYouFeeling,
    }));
  }, []);

  const handleOnClickNextNeedAndSubneeds = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    setState((prevState) => ({
      ...prevState,
      activeStep: ActiveStep.CompleteYourStatement,
    }));
  }, []);

  const handleChangeStatment = useCallback<
    React.ChangeEventHandler<HTMLTextAreaElement>
  >((evt) => {
    setStatement(evt.target.value);
  }, []);

  const handleOnClickPrevCompleteYourStatement = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      activeStep: ActiveStep.WhyAreYouFeeling,
    }));
  }, []);

  const handleOnClickNextCompleteYourStatement = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      activeStep: ActiveStep.HowAreYouFeeling,
    }));
  }, []);

  const handleClickStep = useCallback<
    NonNullable<NVCStepperProps["onClickStep"]>
  >(
    (step) => {
      switch (step.icon) {
        case StepIconEnum.HowAreYou:
          setState((prevState) => ({
            ...prevState,
            activeStep: ActiveStep.HowAreYouFeeling,
          }));
          break;

        case StepIconEnum.WhatAreYouFeeling:
          if (feeling) {
            setState((prevState) => ({
              ...prevState,
              activeStep: ActiveStep.WhatAreYouFeeling,
            }));
          }
          break;

        case StepIconEnum.NeedsAndSubNeeds:
          if (feeling && someFeelingsAreChecked(feelings)) {
            setState((prevState) => ({
              ...prevState,
              activeStep: ActiveStep.WhyAreYouFeeling,
            }));
          }
          break;

        case StepIconEnum.CompleteYourStatement:
          if (
            feelings &&
            someFeelingsAreChecked(feelings) &&
            someNeedsAreChecked(needAndSubNeeds)
          ) {
            setState((prevState) => ({
              ...prevState,
              activeStep: ActiveStep.CompleteYourStatement,
            }));
          }
          break;
      }
    },
    [feeling, feelings, needAndSubNeeds]
  );

  useEffect(() => {
    if (activeStep === ActiveStep.CompleteYourStatement) {
      setStatement(
        `I'm feeling ${pipeFeelingsToString(
          feelings
        )} because my need for ${reduceNeedToNeedStatement(
          filterOutUncheckedNeeds(needAndSubNeeds)
        )} are ${needStatus} when ....`
      );
    }
  }, [activeStep, needAndSubNeeds, feelings, feeling, needStatus]);

  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: 2, background: "white" }}>
        <Box>
          <Typography
            align="center"
            variant="h4"
            sx={{
              background:
                "-webkit-linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              fontWeight: "bold",
              opacity: ".8",
            }}
          >
            Heartful
            <Favorite />
            <ChatBubble />
            Communication
          </Typography>
        </Box>
        <br />
        <NVCStepper
          activeStep={activeStep}
          needStatus={needStatus}
          onClickStep={handleClickStep}
        />
        <br />
        {activeStep === ActiveStep.HowAreYouFeeling && (
          <HowAreYouFeeling
            onChange={handleChangeFeeling}
            onClickNext={onClickNextOnHowAreYouFeeling}
            value={feeling}
          />
        )}
        {activeStep === ActiveStep.WhatAreYouFeeling && (
          <WhatAreYouFeeling
            feelings={feelings}
            onChangeFeelings={onChangeFeelings}
            onClickNext={onClickNextWhatAreYouFeeling}
            onClickPrev={onClickPrevWhatAreYouFeeling}
          />
        )}
        {activeStep === ActiveStep.WhyAreYouFeeling && (
          <NeedAndSubNeeds
            id="need-and-sub-needs"
            onChange={handleChangeNeedAndSubneeds}
            onClickNext={handleOnClickNextNeedAndSubneeds}
            onClickPrev={handleOnClickPrevNeedAndSubneeds}
            value={needAndSubNeeds}
          />
        )}
        {activeStep === ActiveStep.CompleteYourStatement && (
          <CompleteYourStatement
            onChange={handleChangeStatment}
            onClickPrev={handleOnClickPrevCompleteYourStatement}
            onClickNext={handleOnClickNextCompleteYourStatement}
            value={statement}
          />
        )}
      </Container>
    </>
  );
};
