import Radio, { RadioProps } from "@mui/material/Radio/Radio";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import map from "lodash/fp/map";
import React, { useCallback } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export enum FeelingEnum {
  LIKE = "like",
  DISLIKE = "dislike",
}

export interface HowAreYouFeelingProps {
  value: FeelingEnum;
  onChange: (feeling: FeelingEnum) => void;
}

export const HowAreYouFeeling: React.FC<HowAreYouFeelingProps> = ({
  value,
  onChange,
}: HowAreYouFeelingProps) => {
  const handleChange = useCallback<RadioProps["onChange"]>((evt) => {
    onChange(evt.target.value as FeelingEnum);
  }, []);
  const options = React.useMemo<FeelingEnum[]>(
    () => [FeelingEnum.LIKE, FeelingEnum.DISLIKE],
    []
  );
  return (
    <Stack spacing={0} direction="column">
      <Typography variant="h5" component="div" gutterBottom>
        How are you?
      </Typography>
      <Stack spacing={0} direction="row">
        {map<FeelingEnum, any>((feeling) => (
          <Radio
            key={feeling}
            name="feeling"
            value={feeling}
            checked={feeling === value}
            icon={
              feeling === FeelingEnum.LIKE ? <ThumbUpIcon /> : <ThumbDownIcon />
            }
            checkedIcon={
              value === FeelingEnum.LIKE ? (
                <ThumbUpIcon color="primary" />
              ) : (
                <ThumbDownIcon color="primary" />
              )
            }
            onChange={handleChange}
          />
        ))(options)}
      </Stack>
    </Stack>
  );
};
