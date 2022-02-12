import { useMemo } from "react";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack/Stack";
import map from "lodash/fp/map";
import React, { useCallback } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import noop from "lodash/fp/noop";
import {
  PrevNextAndRefresh,
  PrevNextAndRefreshProps,
} from "./PrevNextAndRefresh";
import Box from "@mui/material/Box";

export enum FeelingEnum {
  LIKE = "like",
  DISLIKE = "dislike",
}

export interface HowAreYouFeelingProps {
  value?: FeelingEnum;
  onChange: (feeling: FeelingEnum | undefined) => void;
  onClickNext: () => void;
}

export const HowAreYouFeeling = ({
  value,
  onChange,
  onClickNext = noop,
}: HowAreYouFeelingProps) => {
  const handleChange = useCallback<
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >(
    (evt) => {
      onChange(evt.target.value as FeelingEnum);
    },
    [onChange]
  );
  const handleClickRefresh = useCallback<
    PrevNextAndRefreshProps["onClickRefresh"]
  >(() => {
    onChange(undefined);
  }, [onChange]);

  const options = React.useMemo<FeelingEnum[]>(
    () => [FeelingEnum.LIKE, FeelingEnum.DISLIKE],
    []
  );

  const prevNextAndRefresh = useMemo(
    () => (
      <PrevNextAndRefresh
        onClickNext={onClickNext}
        onClickRefresh={handleClickRefresh}
        isNextDisabled={!value}
      />
    ),
    [handleClickRefresh, onClickNext, value]
  );
  return (
    <Card
      sx={{
        background:
          "linear-gradient( 95deg,rgba(242,113,33, .8) 0%,rgba(233,64,87,.8) 50%,rgba(138,35,135, .8) 100%)",
      }}
    >
      <CardActions sx={{ display: "flex", flexFlow: "row-reverse" }}>
        {prevNextAndRefresh}
      </CardActions>
      <CardContent>
        <Stack direction="row" spacing={2}>
          {map<FeelingEnum, JSX.Element>((feeling) => (
            <Radio
              checked={feeling === value}
              checkedIcon={
                <Box sx={{ color: "white" }}>
                  {value === FeelingEnum.LIKE ? (
                    <ThumbUpIcon color="inherit" fontSize="large" />
                  ) : (
                    <ThumbDownIcon color="inherit" fontSize="large" />
                  )}
                </Box>
              }
              icon={
                <Box>
                  {feeling === FeelingEnum.LIKE ? (
                    <ThumbUpIcon fontSize="large" />
                  ) : (
                    <ThumbDownIcon fontSize="large" />
                  )}
                </Box>
              }
              key={feeling}
              name="feeling"
              onChange={handleChange}
              value={feeling}
            />
          ))(options)}
        </Stack>
      </CardContent>
      <CardActions>{prevNextAndRefresh}</CardActions>
    </Card>
  );
};
