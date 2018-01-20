import enzyme from "enzyme";
import { matchMaker } from "./";

describe("Given 2^n teams, it returns paired matches", () => {
  let teams = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let matches = matchMaker(teams);
  it("creates a matches array of half the length of teams", () => {
    expect(matches.length).toEqual(teams.length / 2);
  });
});
