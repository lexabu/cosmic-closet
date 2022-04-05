import React from 'react';
import { detailStore } from '../../../stores.js';
import './RightDetails.scss';

function RightDetails() {
  const reviewsCount = 209;
  const title = detailStore((state) => state.details.name);
  const category = detailStore((state) => state.details.category);
  const price = detailStore((state) => state.details.default_price);

  return (
    <div className="pd-right-details-container">
      <div className="pd-stars-container">
        <div>⭐⭐⭐⭐⭐</div>
        <span className="pd-read-all-reviews">{`Read all ${reviewsCount} reviews`}</span>
      </div>
      <div className="pd-info">
        <h4 className="pd-category">{category}</h4>
        <h1 className="pd-title">{title}</h1>
        <span className="pd-price">{`$${price}`}</span>
      </div>
    </div>
  );
}

export default RightDetails;
