import * as React from "react";
import { useState } from "react";
import { MainStyled, H1Hidden } from "./style";
import SearchField from "../search-field/search-field";
import ListOfCharacters from "../list-of-characters/list-of-characters";
import ListOfParty from "../list-of-party/list-of-party";
import _ from "lodash";

type CharacherInfoType = {
  id: number;
  name: string;
  image: string;
};

const EMPTY_RICK = {
  id: -2,
  name: "RICK",
  image: "",
};
const EMPTY_MORTY = {
  id: -3,
  name: "MORTY",
  image: "",
};

const Main = () => {
  const [searchText, setSearchText] = useState(``);
  const [rickCard, setRickCard] = useState(EMPTY_RICK);
  const [mortyCard, setMortyCard] = useState(EMPTY_MORTY);
  const [pageShow, setPageShow] = useState(1);

  //* Закладываем задержу на изменение состояния поисковой строки
  const debouncedSetSearchText = _.debounce(setSearchText, 300);

  //* Устанавливаем в state новый запрос из строки поиска.
  const changeSeachText: Function = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchValue = evt.target.value;
    if (searchValue.length > 2) {
      debouncedSetSearchText(searchValue);
      setPageShow(1);
    }
  };

  //* Проверяем что кликнутая карточка принадлежит Рику или Морти, и обновляем state
  const choiceCharacter: Function = (characherInfo: CharacherInfoType) => {
    if (characherInfo.name.toUpperCase().includes("RICK")) {
      setRickCard(characherInfo);
    }
    if (characherInfo.name.toUpperCase().includes("MORTY")) {
      setMortyCard(characherInfo);
    }
  };

  //* Меняем страницы отображения
  const changePageShow = (page: number) => {
    setPageShow(page);
  };

  let partyList = [rickCard, mortyCard];

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
