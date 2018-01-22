import enzyme from "enzyme";
import {
  matchMaker,
  tournamentMaker,
  isPowerOfTwo,
  previousPowerOfTwo
} from "./";

describe("Given 2^n teams, it returns paired matches", () => {
  let teams = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let incorrect = ["a", "b", "c"];
  let matches;
  let noMatches;

  beforeEach(() => {
    matches = matchMaker(teams);
    noMatches = matchMaker(incorrect);
  });

  it("does not create matches for number fo teams different than 2^n", () => {
    expect(noMatches.length).toEqual(0);
  });

  it("creates a matches array of half the length of teams", () => {
    expect(matches.length).toEqual(teams.length / 2);
  });
});

describe("Given an odd number of teams, it returns the first leg of a tournament", () => {
  let teams = ["a", "b", "c", "d", "e", "f", "g"];
  let matches;

  beforeEach(() => {
    matches = tournamentMaker(teams);
  });

  it("returns an object containing the first leg of matches", () => {
    expect(matches.length).toEqual(teams.length - 3);
  });
});

describe("support functions work correctly", () => {
  describe("isPowerOfTwo validates numbers correctly", () => {
    let testArr = [0, 1, 2, 3, 4, 7, 8, 9, 10, 256, -16, "a"];

    it("returns the expected answer", () => {
      expect(testArr.map(e => isPowerOfTwo(e))).toMatchSnapshot();
    });
  });
});

  describe("previousPowerOfTwo retuns the immediate power of two less than the input", () => {
    let testArr = [2, 3, 7, 17, -15, "a"];

    it("returns valid powers of two", () => {
      expect(testArr.map(e => previousPowerOfTwo(e))).toMatchSnapshot();
    });
  });
});
