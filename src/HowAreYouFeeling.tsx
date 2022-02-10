import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack/Stack";
import map from "lodash/fp/map";
import React, { useCallback } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import noop from "lodash/fp/noop";
import { SectionTitle } from "./SectionTitle";

export enum FeelingEnum {
  LIKE = "like",
  DISLIKE = "dislike",
}

export interface HowAreYouFeelingProps {
  value?: FeelingEnum;
  onChange: (feeling: FeelingEnum) => void;
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
  const options = React.useMemo<FeelingEnum[]>(
    () => [FeelingEnum.LIKE, FeelingEnum.DISLIKE],
    []
  );
  return (
    <Card sx={{ background: "#fff59d" }}>
      <CardContent>
        <Stack direction="column" spacing={0}>
          <SectionTitle>
            <span>How are you?</span>
          </SectionTitle>
          <Stack direction="row" spacing={0}>
            {map<FeelingEnum, JSX.Element>((feeling) => (
              <Radio
                checked={feeling === value}
                checkedIcon={
                  value === FeelingEnum.LIKE ? (
                    <ThumbUpIcon color="primary" />
                  ) : (
                    <ThumbDownIcon color="primary" />
                  )
                }
                icon={
                  feeling === FeelingEnum.LIKE ? (
                    <ThumbUpIcon />
                  ) : (
                    <ThumbDownIcon />
                  )
                }
                key={feeling}
                name="feeling"
                onChange={handleChange}
                value={feeling}
              />
            ))(options)}
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button disabled={!value} onClick={onClickNext}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
};
