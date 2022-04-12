import React, { useEffect } from 'react';
import { reviewStore } from '../../../stores.js';
import { StarRating } from '../index.js';
import './RatingSummary.scss';

const round = (value, precision) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

function RatingSummary() {
  const meta = reviewStore((state) => state.ratings);
  const setAverageRating = reviewStore((state) => state.setAverageRating);
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
    const total = oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal;
    const reviewCount = one + two + three + four + five;
    const averageRating = round((total / reviewCount), 1);

    useEffect(() => {
      setAverageRating(averageRating);
    }, []);

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

  return (
    <div
      className="loading"
    >
      {' '}
      Loading...
    </div>
  );
}

export default RatingSummary;
