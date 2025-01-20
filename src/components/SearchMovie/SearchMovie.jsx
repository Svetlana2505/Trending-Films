import { Form, Input } from './SearchMovie.styled';

export const SearchMovie = ({ query, onChange }) => {
  return (
    <>
      <Form>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={e => onChange(e.target.value)}
          autoComplete="off"
          placeholder="Search"
        />
      </Form>
    </>
  );
};
