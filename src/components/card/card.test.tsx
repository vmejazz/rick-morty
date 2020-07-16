import React from "react";
import { render } from "@testing-library/react";
import Card from "./card";

const mockData = {
  character: {
    id: 5,
    name: "Rick",
    image: "",
  },
};

const deletedCard = () => {};
const choiceCharacter = () => {};

test("Render Card component", () => {
  const tree = render(
    <Card
      character={mockData.character}
      deletedCard={deletedCard}
      choiceCharacter={choiceCharacter}
      showCloseButton={true}
    />
  );
  expect(tree).toMatchSnapshot();
});
