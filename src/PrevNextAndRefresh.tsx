import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ButtonProps } from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FormControlLabelItem } from "./SubNeeds";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export type Feeling = FormControlLabelItem;

export type PrevNextAndRefreshProps = {
  isNextDisabled: boolean;
  onClickRefresh: NonNullable<ButtonProps["onChange"]>;
  onClickPrev?: NonNullable<ButtonProps["onChange"]>;
  onClickNext: NonNullable<ButtonProps["onChange"]>;
};

export const PrevNextAndRefresh = ({
  isNextDisabled,
  onClickRefresh,
  onClickPrev,
  onClickNext,
}: PrevNextAndRefreshProps) => (
  <Box display="flex" gap={1}>
    {onClickPrev && (
      <IconButton
        type="button"
        aria-label="previous"
        onClick={onClickPrev}
        sx={{ alignSelf: "center" }}
      >
        <ArrowBackIosIcon />
      </IconButton>
    )}
    <IconButton
      type="button"
      aria-label="refresh"
      onClick={onClickRefresh}
      sx={{ alignSelf: "center" }}
    >
      <RefreshIcon />
    </IconButton>
    <IconButton
      type="button"
      aria-label="next"
      onClick={onClickNext}
      sx={{ alignSelf: "center" }}
      disabled={isNextDisabled}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </Box>
);
