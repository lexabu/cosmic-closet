import React from 'react';
import { Star } from '../index.js';
import './StarRating.scss';

function StarRating({ avg }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= avg}
        />
      ))}
    </span>
  );
}
export default StarRating;
