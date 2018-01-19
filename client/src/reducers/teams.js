import * as types from "../actions";

export default function teams(state = [], action) {
  switch (action.type) {
    case types.LOAD_ALL_TEAMS:
      return action.payload;
    default:
      return state;
  }
}
