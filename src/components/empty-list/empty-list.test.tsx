import React from "react";
import { render } from "@testing-library/react";
import EmptyList from "./empty-list";

test("Render EmptyList component", () => {
  const tree = render(<EmptyList />);
  expect(tree).toMatchSnapshot();
});
