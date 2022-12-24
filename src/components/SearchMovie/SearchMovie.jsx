import { Form, Input, Button } from './SearchMovie.styled';

export const SearchMovie = ({ submit }) => {
  return (
    <>
      <Form onSubmit={submit}>
        <Input type="text" name="query" autoComplete="off" />
        <Button>Search</Button>
      </Form>
    </>
  );
};
