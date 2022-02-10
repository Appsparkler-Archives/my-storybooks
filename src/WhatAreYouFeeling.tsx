import React, { useMemo } from "react";
import { FormControlLabels, SubNeedsProps } from "./SubNeeds";
import { SectionTitle } from "./SectionTitle";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { FormControlLabelItem } from "./SubNeeds";
import { everyItemIsUnchecked } from "./utils";

export type Feeling = FormControlLabelItem;

export type WhatAreYouFeelingProps = {
  feelings: Feeling[];
  onChangeFeelings: SubNeedsProps["onChange"];
  onClickNext: () => void;
  onClickPrev: () => void;
};

export const WhatAreYouFeeling = ({
  feelings,
  onChangeFeelings,
  onClickNext,
  onClickPrev,
}: WhatAreYouFeelingProps) => {
  const isNextDisabled = useMemo<boolean>(
    () => everyItemIsUnchecked(feelings),
    [feelings]
  );
  return (
    <Card sx={{ bgcolor: "#ffe082" }}>
      <CardContent>
        <SectionTitle>What are you feeling?</SectionTitle>
        <FormControlLabels
          gridProps={{
            xs: 6,
            sm: 4,
            md: 3,
            lg: 3,
            xl: 2,
          }}
          id="what-are-you-feeling"
          onChange={onChangeFeelings}
          value={feelings}
        />
      </CardContent>
      <CardActions>
        <Button onClick={onClickPrev}>PREV</Button>
        <Button disabled={isNextDisabled} onClick={onClickNext}>
          NEXT
        </Button>
      </CardActions>
    </Card>
  );
};
