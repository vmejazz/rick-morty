import * as React from "react";
import { ListOfPartyStyled, H2Styled } from "./style";
import Card from "../card/card";

type ListProps = {
  partyList: Array<Object>;
};

const ListOfParty = (props: ListProps) => {
  const { partyList } = props;

  return (
    <React.Fragment>
      <H2Styled>Party</H2Styled>
      <ListOfPartyStyled>
        {partyList.map((item: {}, index: number) => {
          return (
            <Card
              character={item}
              key={index}
              choiceCharacter={() => {}}
              deletedCard={() => {}}
              showCloseButton={false}
            />
          );
        })}
      </ListOfPartyStyled>
    </React.Fragment>
  );
};

export default ListOfParty;
