import { NavLink, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <div>
      <h2>MovieDetailsPage</h2>
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
