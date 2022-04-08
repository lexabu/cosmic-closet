/* eslint-disable no-console */
import React from 'react';
// import { FaStar } from 'react-icons/fa';
import './Star.scss';

const round = (value, precision) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

// if the average is 3.8, this should display as 3¾ solid stars
const checkDecimalRating = (decimalRating) => {
  console.log('decimalRating: ', decimalRating);
  if (decimalRating > 0 && decimalRating <= 0.25) {
    return 'quarter-star';
  } if (decimalRating > 0.25 && decimalRating <= 0.5) {
    return 'half-star';
  } if (decimalRating > 0.5 && decimalRating <= 0.75) {
    return 'three-quarter-star';
  } if (decimalRating > 0.75 && decimalRating <= 1) {
    return 'full-star';
  }
  return 'checkDecimalRating error';
};

// rating is 4, position is 1, pr = 3 // rating is 5, position is 5, pr = 0
// rating is 4.4, position is 4, pr = 0.4 ->
// if rating is greater than position then fill 100%
// rating 3, position 4, pr =-1
const determineStarType = (position, rating) => {
  const positionRating = round((rating - position), 1);
  console.log('position: ', position);
  console.log('rating: ', rating);
  console.log('positionRating: ', positionRating);

  console.log('floor rating: ', Math.floor(rating));

  if (positionRating < -1) {
    console.log('---zero-star---: positionRating < 0:');
    return 'zero-star';
  }
  if (positionRating > 0) {
    console.log('---full-star---positionRating > 0:');
    return 'full-star';
  }
  if (positionRating >= -1 && positionRating < 0) {
    console.log('---decimal star--- positionRating >= 0 && positionRating < 1:');
    const starType = checkDecimalRating(1 + positionRating);
    console.log('------Deciminal Star Rating: ', starType);
    return starType;
  }

  return 'unexpected checkRating Error';
};

function Star({ position, rating }) {
  const className = determineStarType(position, rating);

  return (
    <div className={`star ${className}`}>★</div>
  );
}

export default Star;
