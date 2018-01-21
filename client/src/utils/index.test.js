import enzyme from "enzyme";
import { matchMaker, isPowerOfTwo } from "./";

describe("Given 2^n teams, it returns paired matches", () => {
  let teams = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let incorrect = ["a", "b", "c"];

  let matches = matchMaker(teams);
  let noMatches = matchMaker(incorrect);

  it("does not create matches for number fo teams different than 2^n", () => {
    expect(noMatches.length).toEqual(0);
  });

  it("creates a matches array of half the length of teams", () => {
    expect(matches.length).toEqual(teams.length / 2);
  });

  describe("isPowerOfTwo validates numbers correctly", () => {
    let testArr = [0, 1, 2, 3, 4, 7, 8, 9, 10, 256, -16, "a"];

    it("returns the expected answer", () => {
      expect(testArr.map(e => isPowerOfTwo(e))).toMatchSnapshot();
    });
  });
});
