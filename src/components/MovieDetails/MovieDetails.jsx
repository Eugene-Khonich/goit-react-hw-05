const MovieDetails = ({ movie }) => {
  // const defaultImg =
  //   'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width={300}
      />
      <div>
        <h2>
          {movie.title} <br />
          <span>Original title: {movie.original_title}</span>
        </h2>
        <ul>
          <li>
            <h3>Tagline:</h3>
            <p>{movie.tagline}</p>
          </li>
          <li>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h3>Genres:</h3>
            <p>
              {movie.genres && movie.genres.map(itm => itm.name).join(', ')}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
