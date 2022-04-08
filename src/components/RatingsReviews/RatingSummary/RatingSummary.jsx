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

    // sum total // numerator for average
    const total = oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal;

    // review count // number of reviews // denominator for average
    // Additionally, the count of total reviews should be listed.
    const reviewCount = one + two + three + four + five;

    // The number displayed should be rounded to the nearest single decimal.
    const averageRating = Math.round(((total / reviewCount) * 10) / 10).toFixed(1);

    return (
      <div className="rr-rating-summary">
        <div className="rr-rs-header">
          <h1 className="rr-rs-rating">
            {averageRating}
          </h1>
          <span className="rr-rs-star-rating">
            <StarRating rating={averageRating} />
          </span>
        </div>
        <div className="rr-rs-review-count">
          Total Review Count:
          {' '}
          {reviewCount}
        </div>
      </div>
    );
  }

  return <div> Loading... </div>;
}

export default RatingSummary;
