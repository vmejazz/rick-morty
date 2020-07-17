import React from "react";
import { render } from "@testing-library/react";
import SearchField from "./search-field";

test("Render SearchField component", () => {
  const tree = render(<SearchField changeSeachText={() => {}} />);
  expect(tree).toMatchSnapshot();
});
