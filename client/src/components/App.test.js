import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import { strings } from "../constants";

describe("App", () => {
  let app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  let title = app.find(".main-title");
  it("displays `SUPP` title", () => {
    expect(title.exists()).toBe(true);
    expect(title.text()).toEqual(strings.eventName);
  });
});
