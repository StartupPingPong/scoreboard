import axios from "axios";

const getAllTeams = () => {
  return axios.get("/teams").then(res => res.teams);
};
