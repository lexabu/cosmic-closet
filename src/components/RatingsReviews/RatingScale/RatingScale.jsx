import React from 'react';
import { reviewStore } from '../../../stores.js';
import './RatingScale.scss';

// Characteristics = Size, Width, Comfort, Quality, Length, and Fit

function RatingScale({
  name, label1 = ' ', label2 = ' ', label3 = ' ',
}) {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics) {
    if (characteristics[name]) {
      const value = Number(characteristics[name].value);
      return (
        <div className="rr-rs-scale">
          <div className="rr-rs-title">
            {name}
          </div>
          <progress className="rr-rs-progress progress" max={5} value={value} />
          <div className="rr-rs-labels">
            <span>
              {label1}
            </span>
            <span>
              {label2}
            </span>
            <span>
              {label3}
            </span>
          </div>
        </div>
      );
    }
  }
  return <div className="loading"> Loading...</div>;
}

export default RatingScale;
