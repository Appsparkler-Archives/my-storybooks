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
        onClick={onClickPrev}
        sx={{ alignSelf: "center" }}
      >
        <ArrowBackIosIcon fontSize="small" />
      </IconButton>
    )}
    <IconButton
      type="button"
      aria-label="refresh"
      size="medium"
      onClick={onClickRefresh}
      sx={{ alignSelf: "center" }}
    >
      <RefreshIcon fontSize="inherit" />
    </IconButton>
    <IconButton
      type="button"
      onClick={onClickNext}
      sx={{ alignSelf: "center" }}
      disabled={isNextDisabled}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </Box>
);
