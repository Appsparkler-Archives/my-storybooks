import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import Stack from "@mui/material/Stack/Stack";
import Typography from "@mui/material/Typography/Typography";
import filter from "lodash/fp/filter";
import map from "lodash/fp/map";
import some from "lodash/fp/some";
import React, { useRef, useCallback } from "react";

export interface WhatAreYouFeelingProps {
  value: string[];
  feelings: string[];
  onChange: (feelings: FormDataEntryValue[]) => void;
}

export const WhatAreYouFeeling = ({
  value,
  feelings,
  onChange,
}: WhatAreYouFeelingProps) => {
  const formRef: React.LegacyRef<HTMLFormElement> = useRef(null);
  const handleChange = React.useCallback(
    (evt) => {
      const formData = new FormData(formRef.current);
      const values = formData.getAll("feelings");
      onChange(values);
    },
    [feelings]
  );

  const getIsChecked = React.useCallback(
    (feeling) => {
      return some(($feeling) => feeling === $feeling)(value);
    },
    [value]
  );

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <Stack>
        <Typography variant="h5" children="What are you feeling?" />
        <FormGroup>
          {map<string, any>((feeling) => (
            <FormControlLabel
              label={feeling}
              control={
                <Checkbox
                  onChange={handleChange}
                  value={feeling}
                  name="feelings"
                  checked={getIsChecked(feeling)}
                />
              }
            />
          ))(feelings)}
        </FormGroup>
      </Stack>
    </form>
  );
};
