import * as React from "react";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import EmptyList from "../empty-list/empty-list";
import LoadingPage from "../loading-page/loading-page";
import Card from "../card/card";
import { ListOfCharactersStyled } from "./style";
import PageButtons from "../page-buttons/page-buttons";

type ListProps = {
  searchText: string;
  pageQuery: number;
  changePageShow: Function;
  choiceCharacter: Function;
};

type characterProps = {
  id?: number;
  name?: string;
  image?: string;
};

const CHARACTERS = gql`
  query getList($searchText: String!, $pageShow: Int) {
    characters(filter: { name: $searchText }, page: $pageShow) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;

const ListOfCharacters = (props: ListProps) => {
  const [listDeletedCard, setDeletedCard] = useState([{ id: `` }]);
  const { changePageShow, choiceCharacter, searchText, pageQuery } = props;

  //* Добавляем карточку в список удаленных
  const deletedCard = (id: string) => {
    let cardId = { id: id };

    if (!listDeletedCard.some((item) => item.id === id)) {
      setDeletedCard((listDeletedCard) => [...listDeletedCard, cardId]);
    }
  };

  //* Запрашиваем данные с сервера
  let { loading, error, data } = useQuery(CHARACTERS, {
    variables: {
      searchText: searchText,
      pageShow: pageQuery,
    },
  });

  if (error) return <EmptyList />;
  if (loading) return <LoadingPage />;

  let { results: characters, info } = data.characters;

  return (
    <React.Fragment>
      <ListOfCharactersStyled>
        {characters.map((item: characterProps, index: number) => {
          if (listDeletedCard.some((card: any) => card.id === item.id)) {
            return null;
          }
          return (
            <Card
              character={item}
              key={index}
              deletedCard={deletedCard}
              choiceCharacter={choiceCharacter}
              showCloseButton={true}
            />
          );
        })}
      </ListOfCharactersStyled>
      <PageButtons info={info} changePageShow={changePageShow} />
    </React.Fragment>
  );
};

export default ListOfCharacters;
