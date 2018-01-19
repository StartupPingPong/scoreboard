import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";
import { strings } from "../constants";

describe("App", () => {
  let props = {
    teams: [
      {
        id: 0,
        teamName: "test me"
      }
    ]
  };

  let app = shallow(<App {...props} />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  let title = app.find(".main-title");
  it("displays `SUPP` title", () => {
    expect(title.exists()).toBe(true);
    expect(title.text()).toEqual(strings.eventName);
  });

  it("renders the teams given as props", () => {
    expect(app.find(".lead").text()).toEqual("test me");
  });
});
