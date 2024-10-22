import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchSearchMovies = async () => {
      if (!query) return;
      try {
        const data = await searchMovies(query);
        const results = data.results;
        setMovies(results);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchSearchMovies();
  }, [query]);

  return (
    <div>
      <h1>MoviesPage</h1>
      <SearchForm setSearchParams={setSearchParams} value={query} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
