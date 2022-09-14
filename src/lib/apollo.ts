import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${import.meta.env.VITE_GRAPHCMS_MASTER}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GRAPHCMS_API_MANAGEMENT}`,
  },
  cache: new InMemoryCache(),
});
