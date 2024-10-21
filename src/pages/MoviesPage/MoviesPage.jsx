import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../api';
import { useEffect, useState } from 'react';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchTrandMovies = async () => {
      try {
        const data = await searchMovies(query);
        const results = data.results;
        setMovies(results);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchTrandMovies();
  }, [query]);

  const resetSubmit = () => {
    setQuery('');
    setMovies([]);
  };
  return (
    <div>
      <h1>MoviesPage</h1>
      <SearchForm setQuery={setQuery} reset={resetSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
