import { Need } from "./NeedsAndSubNeeds";
import { pipeFeelingsToString, reduceNeedToNeedStatement } from "./utils";

describe("reduceNeedToNeedStatement", () => {
  it("should correctly render for a single need", () => {
    const needs: Need[] = [
      {
        checked: true,
        id: "123",
        name: "Need 1",
        subNeeds: [
          {
            checked: true,
            id: "need-123-subneed-1",
            name: "Sub Need 1.1",
          },
          {
            checked: true,
            id: "need-123-subneed-2",
            name: "Sub Need 1.2",
          },
        ],
      },
    ];
    const result = reduceNeedToNeedStatement(needs);
    expect(result).toBe("Need 1 (Sub Need 1.1, Sub Need 1.2)");
  });
  it('should join with "and" operator', () => {
    const needs: Need[] = [
      {
        checked: true,
        id: "123",
        name: "Need 1",
        subNeeds: [
          {
            checked: true,
            id: "need-123-subneed-1",
            name: "Sub Need 1.1",
          },
          {
            checked: true,
            id: "need-123-subneed-2",
            name: "Sub Need 1.2",
          },
        ],
      },
      {
        checked: true,
        id: "124",
        name: "Need 2",
        subNeeds: [
          {
            checked: true,
            id: "need-124-subneed-1",
            name: "Sub Need 2.1",
          },
          {
            checked: true,
            id: "need-124-subneed-2",
            name: "Sub Need 2.2",
          },
        ],
      },
    ];
    const result = reduceNeedToNeedStatement(needs);
    expect(result).toBe(
      "Need 1 (Sub Need 1.1, Sub Need 1.2) and Need 2 (Sub Need 2.1, Sub Need 2.2)"
    );
  });
  it("should not render parenthesis when there are no sub-needs", () => {
    const needs: Need[] = [
      {
        checked: true,
        id: "123",
        name: "Need 1",
        subNeeds: [
          {
            checked: false,
            id: "need-123-subneed-1",
            name: "Sub Need 1.1",
          },
          {
            checked: false,
            id: "need-123-subneed-2",
            name: "Sub Need 1.2",
          },
        ],
      },
      {
        checked: true,
        id: "124",
        name: "Need 2",
        subNeeds: [
          {
            checked: true,
            id: "need-124-subneed-1",
            name: "Sub Need 2.1",
          },
          {
            checked: true,
            id: "need-124-subneed-2",
            name: "Sub Need 2.2",
          },
        ],
      },
    ];
    const result = reduceNeedToNeedStatement(needs);
    expect(result).toBe("Need 1 and Need 2 (Sub Need 2.1, Sub Need 2.2)");
  });
});

describe("reduceFeelingsToString", () => {
  it('should join the last and 2nd last feeling with "and" operator', () => {
    const result: string = pipeFeelingsToString([
      { name: "Feeling 1", id: "1", checked: true },
      { name: "Feeling 2", id: "2", checked: true },
      { name: "Feeling 3", id: "3", checked: false },
    ]);
    expect(result).toEqual("Feeling 1 and Feeling 2");
  });
});
