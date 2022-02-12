import { useCallback, useMemo } from "react";
import map from "lodash/fp/map";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import { mapToRecheckedSubNeedValues as mapToRecheckedValues } from "./utils";
import Grid, { GridTypeMap } from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CheckboxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export type SubNeed = FormControlLabelItem;

export interface SubNeedsProps {
  id: string;
  value: SubNeed[];
  gridProps?: GridTypeMap["props"];
  whiteCheckboxes?: boolean;
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
  whiteCheckboxes = false,
  onChange,
  gridProps,
}: SubNeedsProps) => {
  const handleChange = useCallback<NonNullable<CheckboxProps["onChange"]>>(
    (evt, checked) => {
      onChange(mapToRecheckedValues(checked, evt.target.value)(value), id);
    },
    [value, id, onChange]
  );

  const checkboxPropsIfWhiteCheckboxes = useMemo<CheckboxProps>(() => {
    return whiteCheckboxes
      ? {
          checkedIcon: (
            <Box sx={{ color: "white" }}>
              <CheckboxIcon color="inherit" />
            </Box>
          ),
          icon: (
            <Box>
              <CheckBoxOutlineBlankIcon color="inherit" />
            </Box>
          ),
        }
      : {};
  }, [whiteCheckboxes]);

  return (
    <Grid container>
      {map<FormControlLabelItem, JSX.Element>(({ id, checked, name }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Grid item {...gridProps}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                {...checkboxPropsIfWhiteCheckboxes}
                onChange={handleChange}
                value={id}
              />
            }
            key={id}
            label={name}
          />
        </Grid>
      ))(value)}
    </Grid>
  );
};
