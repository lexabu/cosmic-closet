import React from 'react';
import { reviewStore } from '../../../stores.js';
import './RatingScale.scss';

function RatingScale({
  name, label1 = ' ', label2 = ' ', label3 = ' ',
}) {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics && characteristics[name]) {
    const value = Number(characteristics[name].value);
    return (
      <div className="rr-rs-scale" id={`rr-rs-${name}-scale`}>
        <div className="rr-rs-title" id={`rr-rs-${name}-title`}>
          {name}
        </div>
        <progress
          className="rr-rs-progress progress"
          id={`rr-rs-${name}-progress`}
          max={5}
          value={value}
        />
        <div className="rr-rs-labels" id={`rr-rs-${name}-labels`}>
          <span>
            {' '}
            {label1}
            {' '}
          </span>
          <span>
            {' '}
            {label2}
            {' '}
          </span>
          <span>
            {' '}
            {label3}
            {' '}
          </span>
        </div>
      </div>
    );
  }
  return <div className="loading"> Loading...</div>;
}

export default RatingScale;
