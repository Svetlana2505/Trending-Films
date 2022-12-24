import { ButtonStyled } from './Button.styled';

export const Button = ({ buttonClick }) => {
  return (
    <ButtonStyled onClick={buttonClick} type="button">
      Loade more
    </ButtonStyled>
  );
};
