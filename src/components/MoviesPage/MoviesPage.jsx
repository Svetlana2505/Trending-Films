import { useLocation, Link } from 'react-router-dom';

import { List, Title, Item, Box } from './MoviesPage.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export const MoviesPage = ({ visibleMovies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {visibleMovies &&
          visibleMovies.map(({ id, title, poster_path }) => (
            <Item key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <div>
                  <img
                    src={poster_path && `${IMAGE_URL}${poster_path}`}
                    alt=""
                  />
                </div>

                <Box>
                  <Title>{title}</Title>
                </Box>
              </Link>
            </Item>
          ))}
      </List>
    </>
  );
};
