import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchMovieById } from 'services/moviesApi';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { Info } from 'components/Info/Info';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movie && <MovieDescription movie={movie} />}

      <Info />
      <Suspense fallback={<h1>Load children</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
