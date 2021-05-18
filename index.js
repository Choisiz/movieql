import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});
const PORT = process.env.PORT || 4000;

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
