import React from "react";
import { render } from "@testing-library/react";
import Main from "./main";
jest.mock(
  "../list-of-characters/list-of-characters.tsx",
  () => "ListOfCharacters"
);

test("Render Main component", () => {
  const tree = render(<Main />);
  expect(tree).toMatchSnapshot();
});
