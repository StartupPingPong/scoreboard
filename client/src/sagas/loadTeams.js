import { call, put } from "redux-saga/effects";
import { getAllTeams } from "../api";
import * as actions from "../actions";

export function* loadTeams() {
  try {
    const teams = yield call(getAllTeams);

    yield put({ type: actions.LOAD_ALL_TEAMS, payload: teams });
  } catch (error) {
    yield put({ type: actions.FAILED_ALL_TEAMS, payload: error });
  }
}
