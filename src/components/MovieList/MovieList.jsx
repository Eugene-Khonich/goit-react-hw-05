import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <Link
          state={{ from: location }}
          key={movie.id}
          to={`/movies/${movie.id}`}
        >
          <h3>{movie.title}</h3>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
