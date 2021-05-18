"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: "./src/graphql/schema.graphql",
  resolvers: _resolvers["default"]
});
var PORT = process.env.PORT || 4000;
server.start({
  port: PORT
}, function () {
  return console.log("Server running on http://localhost:".concat(PORT));
});