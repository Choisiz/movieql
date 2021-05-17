import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start({ port: process.env.PORT || 4000 }, () =>
  console.log("Server running on http://localhost")
);
