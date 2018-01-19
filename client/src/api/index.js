import axios from "axios";

export const getAllTeams = () => {
  return axios.get("/teams").then(res => {
    return res.data.teams;
  });
};
