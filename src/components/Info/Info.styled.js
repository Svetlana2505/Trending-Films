import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #b8860b;
`;

export const Title = styled.h2`
  text-align: center;
  color: #b8860b;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyleLink = styled(NavLink)`
  color: grey;

  &.active {
    color: #b8860b;
  }
`;
