import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import map from "lodash/fp/map";
import {
  FormControlLabels,
  FormControlLabelItem,
  SubNeedsProps,
} from "./SubNeeds";
import {
  mapToUpdatedNeedsWithCheckedNeed,
  mapToUpdatedNeedsWithSubNeeds,
  uncheckAllSubNeeds,
} from "./utils";
import Card from "@mui/material/Card";
import {
  ButtonProps,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import { SectionTitle } from "./SectionTitle";
import {
  PrevNextAndRefresh,
  PrevNextAndRefreshProps,
} from "./PrevNextAndRefresh";
import { useCallback, useMemo } from "react";

export type Need = {
  id: string;
  checked: boolean;
  name: string;
  subNeeds: FormControlLabelItem[];
};

export interface NeedsAndSubNeedsProps {
  id: string;
  value: Need[];
  onChange: (value: Need[], id: string) => void;
  onClickPrev: NonNullable<ButtonProps["onClick"]>;
  onClickNext: NonNullable<ButtonProps["onClick"]>;
}

export const NeedAndSubNeeds = ({
  onChange,
  onClickNext,
  onClickPrev,
  value,
  id,
}: NeedsAndSubNeedsProps) => {
  const handleChangeNeed = useCallback<
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >(
    (evt, checked) => {
      evt.stopPropagation();
      onChange(
        mapToUpdatedNeedsWithCheckedNeed(checked, evt.target.value)(value),
        id
      );
    },
    [value, id, onChange]
  );

  const handleChangeSubNeeds = useCallback<SubNeedsProps["onChange"]>(
    (updatedSubNeeds, $id) => {
      onChange(mapToUpdatedNeedsWithSubNeeds(updatedSubNeeds, $id)(value), id);
    },
    [value, id, onChange]
  );

  const handleClickRefresh = useCallback<
    PrevNextAndRefreshProps["onClickRefresh"]
  >(() => {
    const uncheckAllNeedsAndSubNeeds = map<Need, Need>((need) => ({
      ...need,
      checked: false,
      subNeeds: uncheckAllSubNeeds(need.subNeeds),
    }));
    onChange(uncheckAllNeedsAndSubNeeds(value), id);
  }, [id, onChange, value]);

  const prevNextAndRefresh = useMemo(
    () => (
      <PrevNextAndRefresh
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        onClickRefresh={handleClickRefresh}
        isNextDisabled={!value}
      />
    ),
    [handleClickRefresh, onClickNext, onClickPrev, value]
  );

  return (
    <Card sx={{ bgcolor: "#ffcc80" }}>
      <CardContent>
        <SectionTitle leftSideChildren={prevNextAndRefresh}>
          What need of yours is met/unmet that makes you feel like that?
        </SectionTitle>
        <Grid container spacing={2}>
          {map<Need, JSX.Element>(({ id, checked, name, subNeeds }) => (
            <Grid item md={4} sm={6} xs={12} maxHeight="400">
              <Paper>
                <CardContent>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          name="need"
                          onChange={handleChangeNeed}
                          value={id}
                        />
                      }
                      label={<Typography variant="h5">{name}</Typography>}
                    />
                  </FormGroup>
                  <FormControlLabels
                    gridProps={{
                      xs: 12,
                      lg: 6,
                    }}
                    id={id}
                    onChange={handleChangeSubNeeds}
                    value={subNeeds}
                  />
                </CardContent>
              </Paper>
            </Grid>
          ))(value)}
        </Grid>
      </CardContent>
      <CardActions>{prevNextAndRefresh}</CardActions>
    </Card>
  );
};
