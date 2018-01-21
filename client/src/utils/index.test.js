import enzyme from "enzyme";
import { matchMaker } from "./";

describe("Given 2^n teams, it returns paired matches", () => {
  let teams = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let incorrect = ["a", "b", "c"];

  let matches = matchMaker(teams);
  let noMatches = matchMaker(incorrect);

  it("does not create matches for number fo teams different than 2^n", () => {
    expect(noMatches).toEqual([]);
  });

  it("creates a matches array of half the length of teams", () => {
    expect(matches.length).toEqual(teams.length / 2);
  });
});
