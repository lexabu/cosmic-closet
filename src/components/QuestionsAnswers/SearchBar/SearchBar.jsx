import React from 'react';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="“Have a question? Search for answers…"
      />
      <button type="button">Search</button>
    </div>
  );
}

export default SearchBar;
