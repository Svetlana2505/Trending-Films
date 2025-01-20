import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  margin-top: -20px;
  margin-left: -20px;
`;

export const Item = styled.li`
  width: calc((100% - 100px) / 5);
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 0.5px solid #b8860b;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  min-height: 100%;
`;

export const Box = styled.div`
  padding: 15px 0;
  text-align: center;
  margin-top: auto;
`;

export const Title = styled.h2`
  font-size: 17px;
  color: #b8860b;
`;

export const Text = styled.p`
  font-size: 11px;
  color: grey;
`;
