import { useCallback, useMemo } from "react";
import { FormControlLabels, SubNeedsProps } from "./SubNeeds";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { IconButtonProps } from "@mui/material/IconButton";
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
    <Card
      sx={{
        background:
          "linear-gradient( 95deg,rgba(242,113,33, .8) 0%,rgba(233,64,87,.8) 50%,rgba(138,35,135, .8) 100%)",
      }}
    >
      <CardActions sx={{ flexFlow: "row-reverse" }}>
        {leftSideChildren}
      </CardActions>
      <CardContent>
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
          whiteCheckboxes
        />
      </CardContent>
      <CardActions>{leftSideChildren}</CardActions>
    </Card>
  );
};
