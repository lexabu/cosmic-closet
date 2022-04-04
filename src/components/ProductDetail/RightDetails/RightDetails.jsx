import React from 'react';
import './RightDetails.scss';

function RightDetails() {
  const reviewsCount = 209;

  return (
    <div className="pd-right-details-container">
      <div className="pd-stars-container">
        <div>⭐⭐⭐⭐⭐</div>
        <span className="pd-read-all-reviews">{`Read all ${reviewsCount} reviews`}</span>
      </div>
      <div className="pd-info">
        <h4 className="pd-category">Category</h4>
        <h1 className="pd-title">Title</h1>
        <span className="pd-price">$269</span>
      </div>
    </div>
  );
}

export default RightDetails;
