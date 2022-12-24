import { StyledLink, List, Item } from './Navigation.styled';
import { useLocation } from 'react-router-dom';
export const Navigation = () => {
  const location = useLocation();
  return (
    <nav>
      <List>
        <Item>
          <StyledLink to="/" state={{ from: location }}>
            Home
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/movies" state={{ from: location }}>
            Movies
          </StyledLink>
        </Item>
      </List>
    </nav>
  );
};
