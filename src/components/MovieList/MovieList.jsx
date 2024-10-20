const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <a href="">{movie.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
