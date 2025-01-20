import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 15px;

  margin-top: -20px;
  margin-left: -20px;
`;

export const Item = styled.li`
  width: calc((100% - 80px) / 4);
  margin-top: 20px;
  margin-left: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 0.5px solid #b8860b;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Title = styled.p`
  color: #b8860b;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;

export const Box = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
