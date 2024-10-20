import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2JiOTk0MTExYTEwNmQ2NzNjNjFkM2Y4NzI5MGUyYSIsIm5iZiI6MTcyOTM2ODE0OS40MzAxNjUsInN1YiI6IjY3MTQwZTU5YzZlMzA0MDk2MTk1ZmNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVGNs4g5Qk-euCNPJW4k84jsIECn1CTB9oBgA3PRmQ8',
  },
  params: {
    language: 'en-US',
  },
});

const trandMovies = async () => {
  const response = await instance.get('/trending/movie/day');
  return response.data;
};
export default trandMovies;
// export const searchMovies = async (query, page) => {
//   const response = await instance.get('/search/movie', {
//     params: {
//       include_adult: 'false',
//       page: page,
//       query: query,
//     },
//   });
//   return response.data;
// };
