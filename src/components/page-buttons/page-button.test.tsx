import React from "react";
import { render } from "@testing-library/react";
import PageButtonsProps from "./page-buttons";

const mockData = {
  info: {
    count: 50,
    pages: 3,
    next: 2,
    prev: 1,
  },
  changePageShowts: () => {},
};

test("Render PageButtonsProps component", () => {
  const tree = render(
    <PageButtonsProps
      info={mockData.info}
      changePageShow={mockData.changePageShowts}
    />
  );
  expect(tree).toMatchSnapshot();
});
