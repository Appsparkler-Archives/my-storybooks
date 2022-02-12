import reduce from "lodash/reduce";
import { join, pipe, some } from "lodash/fp";
import every from "lodash/fp/every";
import filter from "lodash/fp/filter";
import map from "lodash/fp/map";
import { Need } from "./NeedsAndSubNeeds";
import { FormControlLabelItem, SubNeed } from "./SubNeeds";
import { Feeling } from "./WhatAreYouFeeling";

export const someFeelingsAreChecked = some<Feeling>(
  (feeling) => feeling.checked
);

export const uncheckAllFeelings = map<Feeling, Feeling>((feeling) => ({
  ...feeling,
  checked: false,
}));

export const uncheckAllNeedsAndSubNeeds = map<Need, Need>((need) => ({
  ...need,
  checked: false,
  subNeeds: uncheckAllSubNeeds(need.subNeeds),
}));

export const someNeedsAreChecked = some<Need>((need) => need.checked);

export const mapToUpdatedNeedsWithSubNeeds = (
  subNeeds: FormControlLabelItem[],
  needId: string
) =>
  map<Need, Need>((need) => {
    return {
      ...(hasAtleastOneSubNeedChecked(
        need.id === needId ? { ...subNeeds } : { ...need.subNeeds }
      )
        ? { ...need, checked: true }
        : need),
      subNeeds: need.id === needId ? [...subNeeds] : [...need.subNeeds],
    };
  });

export const uncheckAllSubNeeds = map<
  FormControlLabelItem,
  FormControlLabelItem
>((subNeed) => ({
  ...subNeed,
  checked: false,
}));

export const hasAtleastOneSubNeedChecked = (subNeeds: FormControlLabelItem[]) =>
  filter<FormControlLabelItem>((subNeed) => subNeed.checked)(subNeeds).length >
  0;

export const getSubNeeds = (
  checked: boolean,
  need: Need,
  $id: string
): FormControlLabelItem[] => {
  if ($id !== need.id) return need.subNeeds;
  if (checked) return need.subNeeds;
  if (!checked) return uncheckAllSubNeeds(need.subNeeds);
  return [];
};

export const mapToUpdatedNeedsWithCheckedNeed = (
  checked: boolean,
  $id: string
) =>
  map<Need, Need>((need) => {
    return {
      ...need,
      checked: $id === need.id ? checked : need.checked,
      subNeeds: getSubNeeds(checked, need, $id),
    };
  });

export const mapToRecheckedSubNeedValues = (
  $checked: boolean,
  $id: FormControlLabelItem["id"]
) =>
  map<FormControlLabelItem, FormControlLabelItem>(({ id, name, checked }) => {
    return {
      id,
      name,
      checked: $id === id ? $checked : checked,
    };
  });

export const everyItemIsUnchecked = every<FormControlLabelItem>(
  (item) => !item.checked
);

export const reduceSubNeedToSubNeedPartialStatement = (subNeeds: SubNeed[]) =>
  reduce<FormControlLabelItem, string>(
    subNeeds,
    (acc, subNeed) => {
      return `${acc}, ${subNeed}`;
    },
    ""
  );

export const joinWithComma = join(", ");

export const someHaveSubNeeds = some<FormControlLabelItem>((subNeed) =>
  Boolean(subNeed.id)
);

export const mapFeelingsToName = map<Feeling, string>(
  (feeling) => feeling.name
);

export const filterOutUncheckedNeeds = filter<Need>((need) => need.checked);

export const filterOutUnchecked = filter<SubNeed | Need>(
  (subNeed) => subNeed.checked
);

export const pipeFeelingsObjectToString = pipe<
  [Feeling[] | SubNeed[]],
  Feeling[] | SubNeed[],
  string[],
  string
>(filterOutUnchecked, mapFeelingsToName, joinWithComma);

const filterChecked = filter<Feeling | SubNeed>((fs) => fs.checked);

export const reduceFeelingsToString = (feelings: Feeling[]) =>
  reduce<SubNeed, string>(
    feelings,
    (acc, feeling, index, arr) => {
      if (!feeling.checked) return acc;
      if (!acc) {
        return `${feeling.name}`;
      }
      const lastItemIndex = arr.length - 1;
      if (index === lastItemIndex) return `${acc} and ${feeling.name}`;
      return `${acc}, ${feeling.name}`;
    },
    ""
  );

export const pipeFeelingsToString = pipe<[Feeling[]], Feeling[], string>(
  filterOutUnchecked,
  reduceFeelingsToString
);

export const pipeSubNeedsObjectToString = pipe<
  [SubNeed[]],
  SubNeed[],
  string[],
  string
>(filterChecked, mapFeelingsToName, joinWithComma);

export const reduceNeedToNeedStatement = (needs: Need[]) =>
  reduce<Need, string>(
    needs,
    (acc, need, index, arr) => {
      if (!need.checked) return acc;
      const needStatment = `${need.name}${
        filterChecked(need.subNeeds).length > 0
          ? ` (${pipeSubNeedsObjectToString(need.subNeeds)})`
          : ""
      }`;
      if (acc === "") {
        return `${needStatment}`;
      }
      if (index === arr.length - 1) return `${acc} and ${needStatment}`;
      return `${acc}, ${needStatment}`;
    },
    ""
  );
