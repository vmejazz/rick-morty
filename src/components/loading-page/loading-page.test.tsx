import React from "react";
import { render } from "@testing-library/react";
import LoadingPage from "./loading-page";

test("Render LoadingPage component", () => {
  const tree = render(<LoadingPage />);
  expect(tree).toMatchSnapshot();
});
