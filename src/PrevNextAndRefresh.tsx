import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, ButtonProps } from "@mui/material";
import { FormControlLabelItem } from "./SubNeeds";

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
    <IconButton
      type="button"
      aria-label="refresh"
      size="medium"
      onClick={onClickRefresh}
      sx={{ alignSelf: "center" }}
    >
      <RefreshIcon fontSize="inherit" />
    </IconButton>
    {onClickPrev && (
      <Button type="button" onClick={onClickPrev} sx={{ alignSelf: "center" }}>
        PREV
      </Button>
    )}
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
