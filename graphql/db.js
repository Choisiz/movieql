import fetch from "node-fetch";
const API = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let Request_API = API;
  if (limit > 0) {
    Request_API += `limit=${limit}`;
  }
  if (rating > 0) {
    Request_API += `&minimum_rating=${rating}`;
  }
  return fetch(Request_API)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
