import React, { useCallback, useMemo } from "react";
import { FormControlLabels, SubNeedsProps } from "./SubNeeds";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { SectionTitle } from "./SectionTitle";
import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import { FormControlLabelItem } from "./SubNeeds";
import { someFeelingsAreChecked, uncheckAllFeelings } from "./utils";

export type Feeling = FormControlLabelItem;

export type WhatAreYouFeelingProps = {
  feelings: Feeling[];
  onChangeFeelings: SubNeedsProps["onChange"];
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickRefresh: SubNeedsProps["onChange"];
};

export const WhatAreYouFeeling = ({
  feelings,
  onClickRefresh,
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
      <Box display="flex" gap={1}>
        <IconButton
          type="button"
          aria-label="refresh"
          size="large"
          onClick={handleClickRefresh}
          sx={{ alignSelf: "center" }}
        >
          <RefreshIcon fontSize="inherit" />
        </IconButton>
        <Button
          type="button"
          onClick={onClickPrev}
          sx={{ alignSelf: "center" }}
        >
          PREV
        </Button>
        <Button
          type="button"
          onClick={onClickNext}
          variant="contained"
          sx={{ alignSelf: "center" }}
          disabled={isNextDisabled}
        >
          NEXT
        </Button>
      </Box>
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
