import React from "react";
import { shallow, mount } from "enzyme";
import Card from "./card";

const mockData = {
  character: {
    id: 5,
    name: "Rick",
    image: "",
  },
};

it("Test callback character on Click Card ", () => {
  const choiceCharacter = jest.fn();
  const deletedCard = jest.fn();

  const tree = shallow(
    <Card
      character={mockData.character}
      deletedCard={deletedCard}
      choiceCharacter={choiceCharacter}
      showCloseButton={true}
    />
  );

  tree.props().onClick();

  expect(choiceCharacter).toHaveBeenCalled();
  expect(choiceCharacter).toHaveBeenCalledWith(mockData.character);
});

it("Test click on Close button and retern deleted card id", () => {
  const choiceCharacter = jest.fn();
  const deletedCard = jest.fn();

  const tree = mount(
    <Card
      character={mockData.character}
      deletedCard={deletedCard}
      choiceCharacter={choiceCharacter}
      showCloseButton={true}
    />
  );

  const closeButton = tree.find("button");
  closeButton.simulate("click");

  expect(deletedCard).toHaveBeenCalledWith(5);
});
