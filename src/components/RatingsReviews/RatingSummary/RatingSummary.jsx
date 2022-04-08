import React from 'react';
import { reviewMetaStore } from '../../../stores.js';
import { StarRating } from '../index.js';
import './RatingSummary.scss';

function RatingSummary() {
  const meta = reviewMetaStore((state) => state.ratings);
  const { ratings } = meta;

  if (ratings) {
    // sum total of a set of figures by the number of figures.

    // "1": "5",
    // "2": "3",
    // "3": "3",
    // "4": "4",
    // "5": "4"

    const one = ratings['1'] || 0; // 5
    const two = ratings['2'] || 0; // 3
    const three = ratings['3'] || 0; // 3
    const four = ratings['4'] || 0; // 4
    const five = ratings['5'] || 0; // 4

    const oneTotal = one * 1; // 5
    const twoTotal = two * 2; // 6
    const threeTotal = three * 3; // 9
    const fourTotal = four * 4; // 16
    const fiveTotal = five * 5; // 20

    console.log({ one, two, three, four, five, oneTotal, twoTotal, threeTotal, fourTotal, fiveTotal });

    // sum total of a set of figures
    const numerator = oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal; // 56

    // the number of figures
    const denominator = one + two + three + four + five; // 19

    console.log(numerator, denominator);

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
