import React from "react";
import { render } from "@testing-library/react";
import ListOfCharacters from "./list-of-characters";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
});

const useQuery = () => {};

test("Render ListOfCharacters component", () => {
  const tree = render(
    <ApolloProvider client={client}>
      <ListOfCharacters
        searchText={`text`}
        changePageShow={() => {}}
        pageQuery={1}
        choiceCharacter={() => {}}
      />
    </ApolloProvider>
  );
  expect(tree).toMatchSnapshot();
});
