import * as React from "react";
import map from "lodash/fp/map";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { mapToRecheckedSubNeedValues as mapToRecheckedValues } from "./utils";
import Grid, { GridTypeMap } from "@mui/material/Grid";

export type SubNeed = FormControlLabelItem;

export interface SubNeedsProps {
  id: string;
  value: SubNeed[];
  gridProps?: GridTypeMap["props"];
  onChange: (value: FormControlLabelItem[], id: string) => void;
}

export type FormControlLabelItem = {
  id: string;
  name: string;
  checked: boolean;
};

export const FormControlLabels = ({
  id,
  value,
  onChange,
  gridProps,
}: SubNeedsProps) => {
  const handleChange = React.useCallback<
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >(
    (evt, checked) => {
      onChange(mapToRecheckedValues(checked, evt.target.value)(value), id);
    },
    [value, id, onChange]
  );
  return (
    <Grid container>
      {map<FormControlLabelItem, JSX.Element>(({ id, checked, name }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Grid item {...gridProps}>
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleChange} value={id} />
            }
            key={id}
            label={name}
          />
        </Grid>
      ))(value)}
    </Grid>
  );
};
