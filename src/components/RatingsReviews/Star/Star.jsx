import React from 'react';
import './Star.scss';

const round = (value, precision) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

// if the average is 3.8, this should display as 3¾ solid stars
const checkDecimalRating = (decimalRating) => {
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

  if (positionRating < -1) {
    return 'zero-star';
  }
  if (positionRating > 0) {
    return 'full-star';
  }
  if (positionRating >= -1 && positionRating < 0) {
    const starType = checkDecimalRating(1 + positionRating);
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
