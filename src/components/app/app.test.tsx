import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

test("Render App component", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
