import { useLocation } from 'react-router-dom';
import { BsArrowBarLeft } from 'react-icons/bs';

import {
  List,
  Item,
  Box,
  Title,
  SubItem,
  Descr,
  StyledLink,
  Span,
} from './MovieDescription.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

export const MovieDescription = ({
  movie: { genres, poster_path, release_date, title, vote_average, overview },
}) => {
  const strGenres = genres.map(({ name }) => name).join(', ');
  const location = useLocation();

  return (
    <>
      <StyledLink to={location?.state?.from || '/'}>
        <BsArrowBarLeft />
        <Span>Go back</Span>
      </StyledLink>
      <List>
        <Item>
          <img
            src={poster_path && `${IMAGE_URL}${poster_path}`}
            alt=""
            width="200"
          />
          <Box>
            <Title>
              {title} ({release_date.slice(0, 4)})
            </Title>
            <Descr>User Score: {Math.round(vote_average * 10)}%</Descr>
            <SubItem>Overview:</SubItem>
            <Descr>{overview}</Descr>
            <SubItem>Genres:</SubItem>
            <Descr>{strGenres}</Descr>
          </Box>
        </Item>
      </List>
    </>
  );
};
