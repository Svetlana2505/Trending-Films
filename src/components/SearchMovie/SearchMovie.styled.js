import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  margin: auto;
`;

export const Input = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    background-color: transparent;
    outline: 0;
    color: grey;
  }
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
  border-bottom: 1px solid grey;
  color: grey;
`;
