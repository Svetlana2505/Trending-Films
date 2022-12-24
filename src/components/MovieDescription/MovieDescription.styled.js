import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: grey;
`;

export const Span = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-left: 5px;
  color: grey;
`;
export const List = styled.ul`
  border-bottom: 1px solid #b8860b;
  padding: 15px 0;
`;

export const Item = styled.li`
  display: flex;
`;

export const Box = styled.div`
  margin-left: 20px;
  padding: 15px 0;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #b8860b;
`;

export const Descr = styled.p`
  margin-bottom: 10px;
  color: grey;
`;

export const SubItem = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #b8860b;
`;
