import { ApolloClient, InMemoryCache } from "@apollo/client";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

if (!serverUrl) {
  console.error("SERVER_URL is not defined!");
}

const client = new ApolloClient({
  uri: "http://" + serverUrl + "/graphql",
  cache: new InMemoryCache(),
});

export default client;
