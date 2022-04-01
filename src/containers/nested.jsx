// Test for zustand!
import React, { useEffect } from 'react';
import axios from 'axios';
import { detailStore } from '../stores.js';
import Longest from './Longest.jsx';

function Nested() {
  // Assign counter from the store to const count
  const count = detailStore((state) => state.counter);
  // Assign whatever's in the array from the store.apiResults to const apiDeets
  const apiResults = detailStore((state) => state.apiResults);
  // Grab the function from the store's setApiResults
  const setApiResults = detailStore((state) => state.setApiResults);
  const filtered = detailStore((state) => state.filteredApiResults);
  const setFiltered = detailStore((state) => state.setFilteredApiResults);

  const URL = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';

  const resultsShown = [];
  const updateFiltered = () => {
    setFiltered(resultsShown);
  };

  // Similar to componentDidMount()
  useEffect(() => {
    // console.log('Running useEffect()...');
    // GET req with axios
    axios.get(URL)
      .then((results) => {
        // console.log(results.data);
        // pass those results from the GET request to the store using setApiResults
        setApiResults(results.data);
        updateFiltered();
      })
      .catch((err) => {
        throw err;
      });
  }, [count]);

  // console.log('Count:', count);
  for (let i = 0; i < count; i += 1) {
    resultsShown.push(apiResults[i]);
  }
  // console.log('resultsShown', resultsShown);

  return (
    <>
      <h1>Double Nested</h1>
      <h2>{`Count: ${count}`}</h2>
      <Longest />
      {filtered.length > 0 && 'asdf' && filtered.map((e) => (
        <div key={e.name.english}>{e.name.english}</div>
      ))}
    </>
  );
}

export default Nested;
