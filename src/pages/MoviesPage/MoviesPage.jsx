import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = ({ movies }) => {
  return (
    <div>
      <h1>MoviesPage</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
