import React from 'react';
import { reviewStore } from '../../../stores.js';
import { IndividualReviewTile } from '../index.js';
import './ReviewsList.scss';

function ReviewsList() {
  const reviews = reviewStore((state) => state.reviews);
  const { results } = reviews;
  // get the selected sort option from the state and display that review list on the page
  if (results) {
    const max = 2;
    const sliced = results.slice(0, max);
    if (sliced.length > 0) {
      return sliced.map((review) => (
        <div key={review.review_id}>
          <IndividualReviewTile
            review={review}
          />
        </div>
      ));
    }
  }
  return <div className="loading"> Loading... </div>;
}

export default ReviewsList;
