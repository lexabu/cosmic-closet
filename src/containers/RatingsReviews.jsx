import React from 'react';
// Import containers and components
// import { detailStore, ratingStore } from '../stores.js';
import { StarBreakdown, StarRating, Title } from '../components/RatingsReviews/index.js';

function RatingsReviews() {
  return (
    <div>
      <div className="rr-row">

        <div className="rr-left-column" Left Column>
          Left Column
          <Title />
          <div className="rr-Star-Rating"> </div>
          <div className="rr-Star-Breakdown"> </div>
          <div className="rr-Size-Scale"> </div>
          <div className="rr-Comfort-Scale"> </div>
        </div>

        <div className="rr-right-column">
          Right Column
          <div className="rr-Sort"> </div>
          <div className="rr-Reviews-List"> </div>
          <div className="rr-Star-Breakdown"> </div>
          <div className="rr-Buttons"> </div>
        </div>

      </div>

    </div>
  );
}

export default RatingsReviews;
