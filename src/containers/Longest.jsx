// Test for zustand!
import React, { useEffect, useState } from 'react';
import { detailStore } from '../stores.js';

function Longest() {
  const filteredApiResults = detailStore((state) => state.filteredApiResults);
  const [longest, setLongest] = useState('');

  useEffect(() => {
    let longestTemp = '';

    if (filteredApiResults.length === 0) {
      setLongest('');
    }

    filteredApiResults.forEach((e) => {
      if (e.name.english.length >= longestTemp.length) {
        setLongest(e.name.english);
        longestTemp = e.name.english;
      }
    });
  }, [filteredApiResults]);

  return (
    <div>
      <span>Longest: </span>
      {longest}
      <br />
      <br />
    </div>
  );
}

export default Longest;
