import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  //쿼리를 해결
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};
export default resolvers;
