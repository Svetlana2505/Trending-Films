import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: grey;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;

  &.active {
    color: #b8860b;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
