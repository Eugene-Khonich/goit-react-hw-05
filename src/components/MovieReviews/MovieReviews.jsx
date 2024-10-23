import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reviewsById } from '../../api';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        const response = await reviewsById(movieId);
        setReviews(response.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>MovieReviews</h2>
      {reviews !== null &&
        reviews.map(item => {
          return (
            <div key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MovieReviews;
