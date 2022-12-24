import { Form, Input, Button } from './SearchMovie.styled';
import { useState } from 'react';

export const SearchMovie = ({ setSearchParams, setMovies, setPage }) => {
  const [valueName, setValueName] = useState('');

  const handleChange = e => {
    setValueName(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: valueName });
    setValueName('');
    setMovies([]);
    setPage(1);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={valueName}
          onChange={handleChange}
          autoComplete="off"
        />
        <Button>Search</Button>
      </Form>
    </>
  );
};
