import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { fetchSearchMovie } from 'services/moviesApi';
import { HomePage } from 'components/HomePage/HomePage';
import { Circles } from 'react-loader-spinner';
import { Button } from 'components/Button/Button';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryName, setQueryName] = useState('');
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setQueryName(searchParams.get('query'));
    if (!queryName) return;
    setLoader(true);

    fetchSearchMovie(queryName, page).then(({ data: { results } }) => {
      setMovies(prevMovies => [...prevMovies, ...results]);
      setLoader(false);
    });
  }, [page, queryName, searchParams]);

  const handleSubmit = event => {
    event.preventDefault();

    const value = event.target;

    setSearchParams({ query: value.elements[0].value });

    value.reset('');
    setMovies([]);
  };

  const ButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchMovie submit={handleSubmit} />

      {loader ? (
        <Circles
          height="80"
          width="80"
          color="#b8860b"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <HomePage movies={movies} />
          {movies.length && <Button buttonClick={ButtonClick} />}
        </>
      )}
    </>
  );
};
export default Movies;
