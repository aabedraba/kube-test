import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => "Hello world",
  },
};
