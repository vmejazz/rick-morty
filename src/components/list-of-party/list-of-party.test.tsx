import React from "react";
import { render } from "@testing-library/react";
import ListOfParty from "./list-of-party";

const partyList = [
  {
    id: 4,
    name: ``,
    image: ``,
  },
  {
    id: 5,
    name: ``,
    image: ``,
  },
];

test("Render ListOfParty component", () => {
  const tree = render(<ListOfParty partyList={partyList} />);
  expect(tree).toMatchSnapshot();
});
