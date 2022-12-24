import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/moviesApi';
import { Reviews } from 'components/Reviews/Reviews';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ data: { results } }) => {
      setReviews(results);
    });
  }, [movieId]);

  return <>{reviews && <Reviews reviews={reviews} />}</>;
};
export default MovieReviews;
