import React from 'react';
import { reviewMetaStore } from '../../../stores.js';
import { StarRating } from '../index.js';
import './RatingSummary.scss';

function RatingSummary() {
  const meta = reviewMetaStore((state) => state.ratings);
  const { ratings } = meta;

  if (ratings) {
    const one = Number(ratings['1']) || 0;
    const two = Number(ratings['2']) || 0;
    const three = Number(ratings['3']) || 0;
    const four = Number(ratings['4']) || 0;
    const five = Number(ratings['5']) || 0;

    const oneTotal = one * 1;
    const twoTotal = two * 2;
    const threeTotal = three * 3;
    const fourTotal = four * 4;
    const fiveTotal = five * 5;

    // sum total of a set of figures
    const numerator = oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal;

    // the number of figures
    const denominator = one + two + three + four + five;

    // values.forEach((element) => { numerator += Number(element); });
    const avg = numerator / denominator;

    return (
      <div className="rr-rating-summary">
        <h1 className="rr-rs-header">
          {avg}
        </h1>
        <span className="rr-rs-star-rating">
          <StarRating avg={avg} />
        </span>
      </div>
    );
  }

  return <div> Loading... </div>;
}

export default RatingSummary;
