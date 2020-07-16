import * as React from "react";
import {
  CardStyled,
  CardImageStyled,
  CardButtonStyled,
  CardTitleStyled,
} from "./style";

type characterProps = {
  id?: number;
  name?: string;
  image?: string;
};

type CardProps = {
  character: characterProps;
  choiceCharacter: Function;
  deletedCard: Function;
  showCloseButton: boolean;
};

const Card = (props: CardProps) => {
  const { character, choiceCharacter, deletedCard, showCloseButton } = props;
  const { id, name, image: imgUrl } = character;

  return (
    <CardStyled onClick={() => choiceCharacter(character)}>
      <CardTitleStyled>{name}</CardTitleStyled>
      {imgUrl ? (
        <CardImageStyled src={imgUrl} alt={name}></CardImageStyled>
      ) : null}
      {showCloseButton ? (
        <CardButtonStyled
          onClick={(evt) => {
            evt.stopPropagation();
            return deletedCard(id);
          }}
        ></CardButtonStyled>
      ) : null}
    </CardStyled>
  );
};

export default Card;
