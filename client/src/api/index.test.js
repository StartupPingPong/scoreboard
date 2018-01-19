import axios from "axios";
import sinon from "sinon";
import response from "./testhelper";
import { getAllTeams } from ".";

describe("api calls", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should return all teams", done => {
    const resolved = new Promise(r => r({ data: response.teams }));
    sandbox.stub(axios, "get").returns(resolved);

    getAllTeams()
      .then(res => {
        expect(res).toEqual(response.teams);
      })
      .then(done, done);
  });
});
