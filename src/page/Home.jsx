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

  const ButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <HomePage movies={movies} />
      {movies.length && <Button buttonClick={ButtonClick} />}
    </>
  );
};

export default Home;
