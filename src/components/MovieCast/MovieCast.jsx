import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { castById } from '../../api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        const response = await castById(movieId);
        setCast(response.cast);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>CASTS</h2>
      <ul>
        {cast !== null &&
          cast.map(item => {
            return (
              <div key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                  width={100}
                />
                <ul>
                  <li>{item.name}</li>
                  <li>{item.character}</li>
                </ul>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
