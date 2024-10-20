import trandMovies from '../../api';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrandMovies = async () => {
      try {
        const data = await trandMovies();
        const results = data.results;
        setMovies(results);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchTrandMovies();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
