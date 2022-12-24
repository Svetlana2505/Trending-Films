import { fetchMovieCredits } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorList } from 'components/ActorList/ActorList';

const MovieActor = () => {
  const [actor, setActor] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(({ data: { cast } }) => {
      setActor(cast);
    });
  }, [movieId]);

  return (
    <>
      <ActorList actor={actor} />
    </>
  );
};

export default MovieActor;
