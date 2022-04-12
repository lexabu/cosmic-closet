import React from 'react';
import { reviewStore } from '../../../stores.js';
import './RatingBreakdown.scss';

function clickProgressBar() {
  return (
    <div> </div>
  );
}

function RatingBody({
  rating, ratingString, max, value,
}) {
  return (
    <button
      className="rr-rb-body-item"
      id={`rr-rb-body-item-${ratingString}`}
      onClick={() => clickProgressBar}
      onKeyPress={() => clickProgressBar}
      type="button"
    >
      <span
        className="rr-rb-rating"
      >
        {`${rating} stars`}
      </span>
      <progress
        className="rr-rb-progress progress"
        max={max}
        value={value}
      />
    </button>
  );
}
// todo look at line 26
function RatingBreakdown() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { ratings, recommended } = metaRatings;

  if (recommended && ratings) {
    const recommendedTrue = Number(recommended.true) || 0;
    const recommendedFalse = Number(recommended.false) || 0;
    const recommendedTotal = recommendedTrue + recommendedFalse;
    const percentRecommended = ((recommendedTrue / recommendedTotal) * 100).toFixed(0);

    const oneStarRatings = ratings['1'] || 0;
    const twoStarRatings = ratings['2'] || 0;
    const threeStarRatings = ratings['3'] || 0;
    const fourStarRatings = ratings['4'] || 0;
    const fiveStarRatings = ratings['5'] || 0;

    const ratingInfo = [['one', 1, oneStarRatings], ['two', 2, twoStarRatings], ['three', 3, threeStarRatings], ['four', 4, fourStarRatings], ['five', 5, fiveStarRatings]];

    return (
      <div className="rr-rating-breakdown">

        <div className="rr-rb-header">
          {percentRecommended}
          % of reviews recommend this product
        </div>

        <div className="rr-rb-body">
          {ratingInfo.map((rating) => (
            <RatingBody
              key={rating[1]}
              rating={rating[1]}
              ratingString={rating[0]}
              max={recommendedTotal}
              value={rating[2]}
            />
          ))}
        </div>
      </div>
    );
  }
  return <div className="loading"> Loading...</div>;
}

export default RatingBreakdown;
