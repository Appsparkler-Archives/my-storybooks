import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ComponentMeta } from "@storybook/react";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import some from "lodash/fp/some";
import find from "lodash/fp/find";
import pipe from "lodash/fp/pipe";
import { arrayOf, oneOf, shape } from "prop-types";

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

export const NeedAccordion = ({
  id,
  need,
  subNeeds,
  value = undefined,
  onChange,
}) => {
  const isIndeterminate = React.useMemo(() => {
    try {
      return (
        value?.subNeeds?.length > 0 &&
        value?.subNeeds?.length < subNeeds?.length
      );
    } catch {
      return false;
    }
  }, [value, subNeeds]);

  const isChecked = React.useMemo(() => {
    return value?.subNeeds?.length === subNeeds?.length || value?.need === need;
  }, [value, subNeeds]);

  const getIsSubNeedChecked = React.useCallback(
    (subNeed) => {
      try {
        return some(($subNeed) => $subNeed === subNeed)(value?.subNeeds);
      } catch (e) {
        return false;
      }
    },
    [value]
  );

  const handleChangeNeed = React.useCallback<CheckboxProps["onChange"]>(
    (evt, checked) => {
      evt.preventDefault();
      evt.stopPropagation();
      const { value: $value } = evt.target;
      onChange({
        ...value,
        id,
        ...(() => {
          if (checked)
            return {
              need,
              subNeeds: value?.subNeeds || [],
            };
          if (value?.subNeeds?.length === subNeeds.length) {
            return {
              need: "",
              subNeeds: [],
            };
          }
          if (
            value?.subNeeds?.length > 0 &&
            value?.subNeeds?.length < subNeeds.length
          ) {
            return {
              need,
              subNeeds,
            };
          }
          if (value?.subNeeds?.length === 0) {
            return {
              need: "",
              subNeeds: [],
            };
          }
          if (!value.subNeeds) {
            return {
              need: "",
              subNeeds: [],
            };
          }
        })(),
        // subNeeds: checked ? subNeeds : [],
      });
    },
    [need, subNeeds, value]
  );

  const handleChangeSubNeed = React.useCallback<CheckboxProps["onChange"]>(
    (evt, id) => {
      const { subNeeds = [] } = value || {};
      const { value: $value, checked } = evt.target;
      const updatedSubNeeds = !checked
        ? filter(($subNeed) => $subNeed !== $value)(subNeeds)
        : [...subNeeds, $value];
      onChange({
        id,
        need,
        subNeeds: updatedSubNeeds,
      });
    },
    [value, subNeeds]
  );

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          marginY: 0,
          ".MuiAccordionSummary-content": {
            marginY: 0,
          },
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value={need}
                name="need"
                data-id={id}
                indeterminate={isIndeterminate}
                checked={isChecked}
                onChange={handleChangeNeed}
              />
            }
            label={need}
          />
        </FormGroup>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup sx={{ marginLeft: 4 }}>
          {map<string, any>((subNeed) => (
            <FormControlLabel
              key={subNeed}
              control={
                <Checkbox
                  checked={getIsSubNeedChecked(subNeed)}
                  value={subNeed}
                  onChange={(evt) => handleChangeSubNeed(evt, id)}
                />
              }
              label={subNeed}
            />
          ))(subNeeds)}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

NeedAccordion.propTypes = {};

NeedAccordion.args = {
  id: 1,
  need: "Autonomy",
  subNeeds: [
    "Choosing dreams/goals/values",
    "Choosing plans for fulfilling ones dreams/goals/values",
  ],
  value: undefined,
  onChange: console.log,
};

// export const SingleNeedAccordionExample = () => {
//   const [value, setValue] = React.useState(null);
//   const needsAndSubNeeds = React.useMemo(
//     () => [
//       {
//         id: 1,
//         need: "Autonomy",
//         subNeeds: [
//           "Choosing dreams/goals/values",
//           "Choosing plans for fulfilling ones dreams/goals/values",
//         ],
//       },
//       {
//         id: 2,
//         need: "Celebration",
//         subNeeds: [
//           "Celebrating the creation of life and dreams fulfilled",
//           "Celebrating losses: loved ones, dreams, etc. (mourning)",
//         ],
//       },
//     ],
//     []
//   );

//   return (
//     <NeedAccordion
//       value={value}
//       need={needsAndSubNeeds[0].need}
//       subNeeds={needsAndSubNeeds[0].subNeeds}
//       id={1}
//       onChange={(value) => {
//         alert(JSON.stringify(value));
//         setValue(value);
//       }}
//     />
//   );
// };

// export const MulipleNeedsAccordionExample = () => {
//   const [value, setValue] = React.useState([]);

//   const needsAndSubNeeds = React.useMemo(
//     () => [
//       {
//         id: 1,
//         need: "Autonomy",
//         subNeeds: ["Autonomy 1", "Autonomy 2"],
//       },
//       {
//         id: 2,
//         need: "Celebration",
//         subNeeds: ["Celebration 1", "Celebration 2"],
//       },
//     ],
//     []
//   );

//   const handleChange = React.useCallback(({ id, need, subNeeds }) => {
//     setValue((prevValue) => {
//       return [
//         ...pipe(filter(({ id: $id }) => $id !== id))(prevValue),
//         { id, need, subNeeds },
//       ];
//     });
//   }, []);

//   return map(({ id, need, subNeeds }) => (
//     <NeedAccordion
//       id={id}
//       need={need}
//       subNeeds={subNeeds}
//       value={find(({ id: $id, need, subNeed }) => $id === id)(value)}
//       onChange={handleChange}
//     />
//   ))(needsAndSubNeeds);
// };

// export const NeedsAccordion = ({ metOrUnmet, value, onChange }) => {
//   const { needsAndSubNeeds } = React.useMemo(() => {
//     return {
//       needsAndSubNeeds: [
//         {
//           id: 1,
//           need: "Autonomy",
//           subNeeds: [
//             "Choosing dreams/goals/values",
//             "Choosing plans for fulfilling ones dreams/goals/values",
//           ],
//         },
//         {
//           id: 2,
//           need: "Celebration",
//           subNeeds: [
//             "Celebrating the creation of life and dreams fulfilled",
//             "Celebrating losses: loved ones, dreams, etc. (mourning)",
//           ],
//         },
//       ],
//     };
//   }, []);

//   return (
//     <div>
//       <Typography variant="h5">
//         Which needs was {metOrUnmet} that makes you feel the way you do?
//       </Typography>
//       {map(({ need, subNeeds, id }) => (
//         <NeedAccordion
//           id={id}
//           key={`${need}-${id}`}
//           subNeeds={subNeeds}
//           need={need}
//           value={value}
//           onChange={onChange}
//         />
//       ))(needsAndSubNeeds)}
//     </div>
//   );
// };

// NeedsAccordion.args = {
//   feeling: "like",
// };

// export const FeelingsList = ({
//   feeling,
//   listOfFeelings = [],
//   onChange = (feelings: string[]) => {},
// }) => {
//   if (!feeling) return <></>;
//   const feelings = React.useMemo(() => {
//     const notSoGoodFeelings = [
//       "Angry",
//       "Annoyed",
//       "Concerned",
//       "Confused",
//       "Disappointed",
//     ];
//     const goodFeelings = [
//       "Amazed",
//       "Comfortable",
//       "Confident",
//       "Eager",
//       "Energetic",
//     ];
//     return feeling === "like" ? goodFeelings : notSoGoodFeelings;
//   }, [feeling]);

//   const handleChange = React.useCallback(
//     (evt) => {
//       const { value, checked } = evt.target;
//       if (!checked) {
//         const feelings = filter<string>((feeling) => {
//           return feeling !== value;
//         })(listOfFeelings);
//         onChange(feelings);
//       } else {
//         onChange([...listOfFeelings, value]);
//       }
//     },
//     [listOfFeelings]
//   );

//   const getIsChecked = React.useCallback(
//     (feeling) => {
//       return some(($feeling) => feeling === $feeling)(listOfFeelings);
//     },
//     [listOfFeelings]
//   );

//   return (
//     <Stack>
//       <Typography variant="h5" children="What are you feeling?" />
//       <FormGroup>
//         {map<string, any>((feeling) => (
//           <FormControlLabel
//             label={feeling}
//             control={
//               <Checkbox
//                 onChange={handleChange}
//                 value={feeling}
//                 name="feelings"
//                 checked={getIsChecked(feeling)}
//               />
//             }
//           />
//         ))(feelings)}
//       </FormGroup>
//     </Stack>
//   );
// };

// export const Template = () => {
//   const [{ feeling, listOfFeelings, needs }, setState] = React.useState({
//     feeling: undefined,
//     listOfFeelings: [],
//     needs: [],
//   });

//   const handleChangeFeelings = React.useCallback((newFeelings) => {
//     setState((prevState) => ({
//       ...prevState,
//       listOfFeelings: newFeelings,
//     }));
//   }, []);

//   const handleChangeGeneralFeeling: any = React.useCallback((value) => {
//     setState((prevState) => ({
//       ...prevState,
//       feeling: value,
//       listOfFeelings: [], // reset list of feelings
//     }));
//   }, []);

//   const { metOrUnmet, showNeeds } = React.useMemo(() => {
//     return {
//       showNeeds: Boolean(feeling && listOfFeelings.length),
//       metOrUnmet: feeling === "like" ? "met" : "unmet",
//     };
//   }, [feeling, listOfFeelings]);

//   return (
//     <Stack spacing={1} direction="column">
//       <pre>{JSON.stringify({ feeling, listOfFeelings, needs }, null, 2)}</pre>
//       <HowAreYouFeeling value={feeling} onChange={handleChangeGeneralFeeling} />
//       <FeelingsList
//         feeling={feeling}
//         listOfFeelings={listOfFeelings}
//         onChange={handleChangeFeelings}
//       />
//       {showNeeds && (
//         <NeedsAccordion
//           metOrUnmet={metOrUnmet}
//           value={needs}
//           onChange={(value) =>
//             setState((prevState) => ({ ...prevState, needs: value }))
//           }
//         />
//       )}
//     </Stack>
//   );
// };

// export const Example = Template.bind({});
