import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { fetchSearchMovie } from 'services/moviesApi';
import { Circles } from 'react-loader-spinner';
import { Button } from 'components/Button/Button';
import { MoviesPage } from 'components/MoviesPage/MoviesPage';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    setLoader(true);

    fetchSearchMovie(query, page).then(({ data: { results } }) => {
      setMovies(prevMovies => [...prevMovies, ...results]);

      setLoader(false);
    });
  }, [page, query]);

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const onChange = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchMovie query={query} onChange={onChange} />
      <MoviesPage visibleMovies={visibleMovies} />

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
          {movies.length > 0 && (
            <Button buttonClick={() => setPage(prev => prev + 1)} />
          )}
        </>
      )}
    </>
  );
};
export default Movies;
