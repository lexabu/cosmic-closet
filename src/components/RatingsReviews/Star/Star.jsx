import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.scss';

function Star({ position, rating }) {
  const checkDecimalRating = function (decimalRating) {
    if (decimalRating > 0 && decimalRating <= 0.25) {
      return 'quarter';
    } if (decimalRating > 0.25 && decimalRating <= 0.5) {
      return 'half';
    } if (decimalRating > 0.5 && decimalRating <= 0.75) {
      return 'three-quarter';
    } if (decimalRating > 0.75 && decimalRating <= 1) {
      return 'full';
    }
    return '404';
  };

  // if rating is greater than position then fill 100%
  // const pr = rating - position;
  // if (pr >= 0) {

  // }
  if (position === 1) {
    if (rating === 0) {
      // if rating is 0 make all stars grey
    } else if (rating > 0 && rating < 1) {
      // if rating is greater than 0 and less than 1 then
      // determine decimal rating

    } else if (rating > 1 && rating < 2) {
      // if rating is greater than 1 and less than 2 then
      // not in scope for this position
    } else if (rating > 2 && rating < 3) {
      // not in scope for this position

    } else if (rating > 3 && rating < 4) {
      // not in scope for this position

    } else if (rating > 4 && rating < 5) {
      // not in scope for this position
    }
  }

  return (
    <div className="star">★</div>
  );
}

export default Star;
