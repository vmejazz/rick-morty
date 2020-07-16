import * as React from "react";
import { useState } from "react";
import { MainStyled, H1Hidden } from "./style";
import SearchField from "../search-field/search-field";
import ListOfCharacters from "../list-of-characters/list-of-characters";
import ListOfParty from "../list-of-party/list-of-party";

type CharacherInfoType = {
  id: number;
  name: string;
  image: string;
};

const Main = () => {
  const EMPTY_RICK = {
    id: -2,
    name: "",
    image: "",
  };
  const EMPTY_MORTY = {
    id: -3,
    name: "",
    image: "",
  };

  const [searchText, setSearchText] = useState(``);
  const [rickCard, setRickCard] = useState(EMPTY_RICK);
  const [mortyCard, setMortyCard] = useState(EMPTY_MORTY);
  const [pageShow, setPageShow] = useState(1);

  //* Меняем строку поиска
  const changeSeachText: Function = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchValue = evt.target.value;
    if (searchValue.length > 2) {
      setSearchText(searchValue);
    }
  };

  //* Устанавливаем карточки в Party Team
  const choiceCharacter: Function = (characherInfo: CharacherInfoType) => {
    if (characherInfo.name.toUpperCase().includes(`RICK`)) {
      setRickCard(characherInfo);
    }
    if (characherInfo.name.toUpperCase().includes(`MORTY`)) {
      setMortyCard(characherInfo);
    }
  };

  //* Меняем страницы отображения
  const changePageShow = (page: number) => {
    setPageShow(page);
  };

  let partyList = [];
  partyList.push(rickCard);
  partyList.push(mortyCard);

  return (
    <MainStyled>
      <H1Hidden>Test page Rick and Morty</H1Hidden>
      <SearchField changeSeachText={changeSeachText} />
      <ListOfCharacters
        searchText={searchText}
        pageQuery={pageShow}
        choiceCharacter={choiceCharacter}
        changePageShow={changePageShow}
      />
      <ListOfParty partyList={partyList} />
    </MainStyled>
  );
};

export default Main;
