import React from 'react';
import { reviewStore } from '../../../stores.js';
import { IndividualReviewTile } from '../index.js';
import './ReviewsList.scss';

// given the id, map each review to an individual review tile
// only display the first two individual review tiles
function ReviewsList() {
  const reviews = reviewStore((state) => state.reviews);
  const { results } = reviews;
  if (results) {
    // console.log('results: ', results);
    const max = 2;
    const sliced = results.slice(0, max);
    // console.log('sliced: ', sliced);
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

// not sure why this wasnt working
// sliced.forEach((review) => {
//   console.log('review: ', review);
//   return (
//     <div className="rr-reviews-list">
//       Reviews List
//       <IndividualReviewTile
//         review={review}
//       />
//     </div>
//   );
// });
// }
