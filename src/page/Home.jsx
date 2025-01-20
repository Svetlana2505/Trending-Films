import { fetch } from 'services/moviesApi';
import { useEffect, useState } from 'react';
import { HomePage } from 'components/HomePage/HomePage';
import { Button } from 'components/Button/Button';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(page).then(({ data: { results } }) => {
      setMovies(prevMovies => [...prevMovies, ...results]);
    });
  }, [page]);

  return (
    <>
      <HomePage movies={movies} />
      {movies.length > 0 && (
        <Button buttonClick={() => setPage(prev => prev + 1)} />
      )}
    </>
  );
};

export default Home;
