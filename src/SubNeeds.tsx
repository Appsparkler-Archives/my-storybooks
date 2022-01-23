import * as React from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import some from "lodash/fp/some";

const someValuesMatch = (val: string) => some<string>(($val) => val === $val);

const filterOutMatchingValue = (val: string) =>
  filter<string>(($val) => $val !== val);

export interface SubNeedInterface {
  value: string[];
  subNeed: string;
  onChange: (value: string[]) => void;
}

export interface SubNeedsInterface {
  value: string[];
  subNeeds: string[];
  onChange: (value: string[]) => void;
}

export const SubNeeds = ({ value, subNeeds, onChange }: SubNeedsInterface) => (
  <>
    {map<string, JSX.Element>((subNeed) => (
      <SubNeed
        onChange={onChange}
        value={value}
        subNeed={subNeed}
        key={subNeed}
      />
    ))(subNeeds)}
  </>
);

export const SubNeed = ({ value, subNeed, onChange }: SubNeedInterface) => {
  const isChecked = React.useMemo(
    () => someValuesMatch(subNeed)(value),
    [subNeed, value]
  );

  const handleChange = React.useCallback<CheckboxProps["onChange"]>(
    (_evt, checked) => {
      if (!checked) onChange(filterOutMatchingValue(subNeed)(value));
      else onChange([...value, subNeed]);
    },
    [value, subNeed]
  );
  return (
    <FormControlLabel
      control={
        <Checkbox checked={isChecked} value={subNeed} onChange={handleChange} />
      }
      label={subNeed}
    />
  );
};

export const mapSubNeedsToSubNeedComponent = map<string, any>(
  (subNeed, checked, onChange) => (
    <FormControlLabel
      key={subNeed}
      control={
        <Checkbox checked={checked} value={subNeed} onChange={onChange} />
      }
      label={subNeed}
    />
  )
);
