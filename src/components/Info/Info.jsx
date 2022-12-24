import { Box, StyleLink, Title, List, Item } from './Info.styled';
import { useLocation } from 'react-router-dom';
export const Info = () => {
  const location = useLocation();

  return (
    <Box>
      <Title>Additional information</Title>
      <List>
        <Item>
          <StyleLink to="cast" state={{ from: location?.state?.from }}>
            Cast
          </StyleLink>
        </Item>
        <Item>
          <StyleLink to="reviews" state={{ from: location?.state?.from }}>
            Reviews
          </StyleLink>
        </Item>
      </List>
    </Box>
  );
};
