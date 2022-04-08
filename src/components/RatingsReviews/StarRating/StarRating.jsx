import React from 'react';
import { Star } from '../index.js';
import './StarRating.scss';

function StarRating({ rating }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
        />
      ))}
    </span>
  );
}
export default StarRating;
