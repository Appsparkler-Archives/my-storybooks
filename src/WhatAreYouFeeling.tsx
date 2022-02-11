import { useCallback, useMemo } from "react";
import { FormControlLabels, SubNeedsProps } from "./SubNeeds";
import { SectionTitle } from "./SectionTitle";
import { Card, CardActions, CardContent, IconButtonProps } from "@mui/material";
import { FormControlLabelItem } from "./SubNeeds";
import { someFeelingsAreChecked, uncheckAllFeelings } from "./utils";
import { PrevNextAndRefresh } from "./PrevNextAndRefresh";

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
  const handleClickRefresh = useCallback<
    NonNullable<IconButtonProps["onClick"]>
  >(() => {
    onChangeFeelings(uncheckAllFeelings(feelings), "feelings-refreshed");
  }, [onChangeFeelings, feelings]);

  const isNextDisabled = useMemo<boolean>(
    () => !someFeelingsAreChecked(feelings),
    [feelings]
  );

  const leftSideChildren = useMemo(() => {
    return (
      <PrevNextAndRefresh
        onClickRefresh={handleClickRefresh}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        isNextDisabled={isNextDisabled}
      />
    );
  }, [handleClickRefresh, isNextDisabled, onClickNext, onClickPrev]);
  return (
    <Card sx={{ bgcolor: "#ffe082" }}>
      <CardContent>
        <SectionTitle leftSideChildren={leftSideChildren}>
          What are you feeling?
        </SectionTitle>
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
      <CardActions>{leftSideChildren}</CardActions>
    </Card>
  );
};
