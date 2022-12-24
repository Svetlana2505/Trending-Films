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
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setLoader(true);

    fetchSearchMovie(query, page).then(({ data: { results } }) => {
      setMovies(prevMovies => [...prevMovies, ...results]);

      setLoader(false);
    });
  }, [page, query]);

  const ButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchMovie
        setPage={setPage}
        setSearchParams={setSearchParams}
        setMovies={setMovies}
      />
      <HomePage movies={movies} />

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
        <>{movies.length && <Button buttonClick={ButtonClick} />}</>
      )}
    </>
  );
};
export default Movies;
