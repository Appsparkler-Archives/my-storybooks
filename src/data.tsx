import split from "lodash/fp/split";
import pipe from "lodash/fp/pipe";
import map from "lodash/fp/map";
import { v4 as uuid } from "uuid";
import { Feeling } from "./WhatAreYouFeeling";
import { Need } from "./NeedsAndSubNeeds";
import { SubNeed } from "./SubNeeds";

const mapStringFeelingOrSubNeedObject = map<string, Feeling | SubNeed>(
  (feeling) => ({
    checked: false,
    id: uuid(),
    name: feeling,
  })
);
const splitWithNewLine = split(/\n/);
const pipeStringToFeelings = pipe<[string], string[], Feeling[]>(
  splitWithNewLine,
  mapStringFeelingOrSubNeedObject
);

const convertNeedArrayToNeed = (needs: string[]): Need => {
  const [primaryNeed, ...subNeeds] = needs;
  return {
    checked: false,
    id: uuid(),
    name: primaryNeed,
    subNeeds: mapStringFeelingOrSubNeedObject(subNeeds),
  };
};

const pipeNeedsStringToNeed = pipe<[string[]], string[][], Need[]>(
  map(splitWithNewLine),
  map(convertNeedArrayToNeed)
);

const goodFeelingsString = `Calm
Content
Confident
Balanced
Peaceful
Relaxed
Delighted
Pleased
Happy
Joyful
Glad
At ease
Playful
Proud
Alive
Fulfilled
Satisfied
Grateful
Thrilled
Loving
Accepting
Trusting
Safe
Secure
Kind
Affectionate
Close
Interested
Curious
Eager
Alert
Amused
Inspired
Enthusiastic
Involved
Energized
Excited
Fascinated
Adventurous
Refreshed
Open
Free
Sensitive
Receptive
Touched
Willing
Strong`;

const notSoGoodFeelingsString = `Upset
Unhappy
Confused
Puzzled
Angry
Irritated
Annoyed
Frustrated
Worried
Alone
Concerned
Helpless
Powerless
Stuck
Fed up
Sad
Miserable
Depressed
Regretful
Disappointed
Discouraged
Afraid
Anxious
Nervous
Wary
Cautious
Scared
Panicky
Agitated
Uneasy
Reluctant
Uncomfortable
Surprised
Shocked
Overwhelmed
Hurt
Disgusted
Ashamed
Embarrassed
Vulnerable
Tired
Bored
Stressed
Exasperated
In conflict
Torn
Undecided`;

const needsStringArr = [
  `Physical Sustenance
Food and water
Health
Movement
Physical Safety
Rest / sleep
Shelter
Touch`,
  `Security
Consistency
Justice
Order/Structure
Peace (external or internal)
Protection
Emotional Safety
Trust`,
  `Freedom
Autonomy
Choice
Ease
Independence
Power
Self-responsibility
Space`,
  `Understanding
Awareness
Clarity
Discovery
Learning
Making sense of life`,
  `Leisure/Relaxation
Fun/Play
Humour
Joy
Quiet/silence
Variety`,
  `Connection
Affection
Appreciation
Attention
Companionship
Harmony
Love
Nurture
Support
To contribute to others
Understanding others`,
  `To Matter
Acceptance
Care
Compassion
Consideration
Empathy
Kindness
Recognition
Respect
To be heard
To be trusted
To be understood`,
  `Community
Belonging
Communication
Cooperation
Equality
Fairness
Inclusion
Participation
Self-expression
Sharing`,
  `Sense of Self
Authenticity
Competence
Creativity
Dignity
Growth
Honesty
Integrity
Self-acceptance
Self-care
Self-esteem
Self-knowledge`,
  `Meaning
Aliveness
Challenge
Consciousness
Contribution
Creativity
Effectiveness
Exploration
Integration
Mourning
Purpose
Wisdom`,
  `Transcendence
Beauty
Celebration of life
Faith
Hope
Inspiration
Spiritual development`,
];

export const goodFeelings: Feeling[] = pipeStringToFeelings(goodFeelingsString);

export const notSoGoodFeelings: Feeling[] = pipeStringToFeelings(
  notSoGoodFeelingsString
);

export const needs: Need[] = pipeNeedsStringToNeed(needsStringArr);
