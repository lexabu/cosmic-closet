import React from 'react';
import { reviewStore } from '../../../stores.js';
import { IndividualReviewTile } from '../index.js';
import './ReviewsList.scss';

// given the id, map each review to an individual review tile
// only display the first two individual review tiles
function ReviewsList() {
  const reviews = reviewStore((state) => state.reviews);
  const {
    count, page, product, results,
  } = reviews;
  if (results) {
    console.table({ count, page, product });
    console.log('results: ', results);
    const max = 2;
    const sliced = results.slice(0, max);
    console.log('sliced: ', sliced);
    return (
      <div className="rr-reviews-list">
        Reviews List
        <IndividualReviewTile
        />
      </div>
    );
  }
  return <div className="loading"> Loading... </div>;
}

export default ReviewsList;
