import React from 'react';
import { Button } from '@mantine/core';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Have a question? Search for answers…"
      />
      <Button className="search-button">Search</Button>
    </div>
  );
}

export default SearchBar;
