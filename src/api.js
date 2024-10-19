import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2JiOTk0MTExYTEwNmQ2NzNjNjFkM2Y4NzI5MGUyYSIsIm5iZiI6MTcyOTM2ODE0OS40MzAxNjUsInN1YiI6IjY3MTQwZTU5YzZlMzA0MDk2MTk1ZmNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVGNs4g5Qk-euCNPJW4k84jsIECn1CTB9oBgA3PRmQ8',
  },
  params: {
    include_adult: false,
    language: 'en-US',
  },
};

const fetchMovies = axios
  .get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));

export default fetchMovies;
