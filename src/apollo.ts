import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          items: relayStylePagination(),
        },
      },
    },
  }),
});

export default client;
