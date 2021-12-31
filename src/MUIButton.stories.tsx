import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
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
import { every, some } from "lodash/fp";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MUI Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const HowAreYouFeeling = ({ value: $value, onChange }) => {
  const options = React.useMemo(() => ["like", "dislike"], []);
  return (
    <Stack spacing={0} direction="column">
      <Typography variant="h5" component="div" gutterBottom>
        How are you?
      </Typography>
      <Stack spacing={0} direction="row">
        {map<string, any>((value) => (
          <Radio
            key={value}
            name="feeling"
            value={value}
            checked={value === $value}
            icon={value === "like" ? <ThumbUpIcon /> : <ThumbDownIcon />}
            checkedIcon={
              value === "like" ? (
                <ThumbUpIcon color="primary" />
              ) : (
                <ThumbDownIcon color="primary" />
              )
            }
            onChange={(evt) => onChange(evt.target.value)}
          />
        ))(options)}
      </Stack>
    </Stack>
  );
};

export const NeedAccordion = ({ need, subNeeds, value, onChange }) => {
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

  const handleChangeNeed = React.useCallback(
    (evt) => {
      const { value, checked } = evt.target;
      onChange({
        need: checked ? value : undefined,
        subNeeds: checked ? subNeeds : [],
      });
    },
    [subNeeds]
  );

  const handleChangeSubNeed = React.useCallback(
    (evt) => {
      const { value: $value, checked } = evt.target;
      onChange({
        need: value?.need,
        subNeeds: !checked
          ? filter(($subNeed) => $subNeed !== $value)(value?.subNeeds)
          : [...value.subNeeds, $value],
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
                  onChange={handleChangeSubNeed}
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
NeedAccordion.args = {
  need: "Autonomy",
  subNeeds: [
    "Choosing dreams/goals/values",
    "Choosing plans for fulfilling ones dreams/goals/values",
  ],
  value: {
    need: "Autonomy",
    subNeeds: ["Choosing dreams/goals/values"],
  },
  onChange: console.log,
};

export const NeedAccordionExample = () => {
  const [value, setValue] = React.useState({ need: undefined, subNeeds: [] });
  const handleChange = React.useCallback((updatedNeed) => {
    setValue(updatedNeed);
  }, []);
  return (
    <NeedAccordion
      value={value}
      need="Autonomy"
      subNeeds={[
        "Choosing dreams/goals/values",
        "Choosing plans for fulfilling ones dreams/goals/values",
      ]}
      onChange={setValue}
    />
  );
};

export const NeedsAccordion = ({ feeling }) => {
  if (!feeling) return <></>;
  const { metOrUnmet } = React.useMemo(() => {
    return {
      metOrUnmet: feeling === "like" ? "met" : "unmet",
    };
  }, [feeling]);
  return (
    <div>
      <Typography variant="h5">
        Which needs was {metOrUnmet} that makes you feel the way you do?
      </Typography>
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
              control={<Checkbox defaultChecked />}
              label="Autonomy"
            />
          </FormGroup>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{ marginLeft: 4 }}>
            {map<string, any>((subneed) => (
              <FormControlLabel
                key={subneed}
                control={<Checkbox />}
                label={subneed}
              />
            ))([
              "Choosing dreams/goals/values",
              "Choosing plans for fulfilling ones dreams/goals/values",
            ])}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
NeedsAccordion.args = {
  feeling: "like",
};

export const FeelingsList = ({
  feeling,
  listOfFeelings = [],
  onChange = (feelings: string[]) => {},
}) => {
  if (!feeling) return <></>;
  const feelings = React.useMemo(() => {
    const notSoGoodFeelings = [
      "Angry",
      "Annoyed",
      "Concerned",
      "Confused",
      "Disappointed",
    ];
    const goodFeelings = [
      "Amazed",
      "Comfortable",
      "Confident",
      "Eager",
      "Energetic",
    ];
    return feeling === "like" ? goodFeelings : notSoGoodFeelings;
  }, [feeling]);

  const handleChange = React.useCallback(
    (evt) => {
      const { value, checked } = evt.target;
      if (!checked) {
        const feelings = filter<string>((feeling) => {
          return feeling !== value;
        })(listOfFeelings);
        onChange(feelings);
      } else {
        onChange([...listOfFeelings, value]);
      }
    },
    [listOfFeelings]
  );

  const getIsChecked = React.useCallback(
    (feeling) => {
      return some(($feeling) => feeling === $feeling)(listOfFeelings);
    },
    [listOfFeelings]
  );

  return (
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
  );
};

export const Template = () => {
  const [{ feeling, listOfFeelings }, setState] = React.useState({
    feeling: undefined,
    listOfFeelings: [],
  });

  const handleChangeFeelings = React.useCallback((newFeelings) => {
    setState((prevState) => ({
      ...prevState,
      listOfFeelings: newFeelings,
    }));
  }, []);

  const handleChangeGeneralFeeling: any = React.useCallback((value) => {
    setState((prevState) => ({
      ...prevState,
      feeling: value,
      listOfFeelings: [], //reset list of feelings
    }));
  }, []);
  return (
    <Stack spacing={1} direction="column">
      <pre>{JSON.stringify({ feeling, listOfFeelings }, null, 2)}</pre>
      <HowAreYouFeeling value={feeling} onChange={handleChangeGeneralFeeling} />
      <FeelingsList
        feeling={feeling}
        listOfFeelings={listOfFeelings}
        onChange={handleChangeFeelings}
      />
      <NeedsAccordion feeling={feeling} />
    </Stack>
  );
};

export const exampleButton = Template.bind({});
