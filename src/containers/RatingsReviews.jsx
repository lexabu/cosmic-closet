import React from 'react';
// Import containers and components
// import { detailStore, ratingStore } from '../stores.js';
import { LeftColumn, RightColumn } from '../components/RatingsReviews/index.js';

function RatingsReviews() {
  return (
    <div id="ratings-reviews" className="ratings-reviews">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default RatingsReviews;
