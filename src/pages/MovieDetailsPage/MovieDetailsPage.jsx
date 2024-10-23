import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { moviesById } from '../../api';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMoviesById = async () => {
      try {
        const response = await moviesById(movieId);
        setMovie(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMoviesById();
  }, [movieId]);

  return (
    <div>
      {movie !== null && <MovieDetails movie={movie} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
