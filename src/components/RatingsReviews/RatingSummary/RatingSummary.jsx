import React from 'react';
import { reviewMetaStore } from '../../../stores.js';

function RatingSummary() {
  const meta = reviewMetaStore((state) => state.ratings);
  const { ratings } = meta;

  if (ratings) {
    const values = Object.values(ratings);
    let numerator = 0;
    const denominator = values.length;
    values.forEach((element) => { numerator += Number(element); });
    const avg = numerator / denominator;

    return (
      <div className="rr-rating-summary">
        {avg}
      </div>
    );
  }

  return <div> Loading ... </div>;
}

export default RatingSummary;
