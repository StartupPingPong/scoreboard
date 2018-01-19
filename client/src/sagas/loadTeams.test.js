import { loadTeams } from "./loadTeams";
import response from "../api/testhelper";
import { call } from "redux-saga/effects";

import { getAllTeams } from "../api";

const gen = loadTeams();

it("calls getAllTeams API", () => {
  expect(gen.next().value).toEqual(call(getAllTeams));
});
