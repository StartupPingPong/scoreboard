import { takeEvery, all } from "redux-saga/effects";
import { loadTeams } from "./loadTeams";
import * as actions from "../actions";

function* rootSaga() {
  yield all([takeEvery(actions.GET_ALL_TEAMS, loadTeams)]);
}

export default rootSaga;
