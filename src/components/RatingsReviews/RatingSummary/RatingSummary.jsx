import React from 'react';
import { reviewMetaStore } from '../../../stores.js';
import { StarRating } from '../index.js';
import './RatingSummary.scss';

function RatingSummary() {
  const meta = reviewMetaStore((state) => state.ratings);
  const { ratings } = meta;

  if (ratings) {
    // TODO: update avg to be object key times object value in order to get to actual avg
    const values = Object.values(ratings);
    let numerator = 0;
    const denominator = values.length;
    values.forEach((element) => { numerator += Number(element); });
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
