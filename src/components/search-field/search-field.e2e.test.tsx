import React from "react";
import { mount } from "enzyme";
import SearchField from "./search-field";

it("Test input searchfield returned text Card ", () => {
  const changeSeachText = jest.fn();

  const tree = mount(
    <SearchField changeSeachText={() => changeSeachText("someText")} />
  );

  const inputField = tree.find("input");
  inputField.simulate("change", { target: { value: `someText` } });

  expect(changeSeachText).toHaveBeenCalled();
  expect(changeSeachText).toHaveBeenCalledWith("someText");
});
