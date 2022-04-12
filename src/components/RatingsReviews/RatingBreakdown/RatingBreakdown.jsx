import React from 'react';
import { reviewStore } from '../../../stores.js';
import './RatingBreakdown.scss';

function RatingBody({
  starNumber, starNumberString, max, value,
}) {
  return (
    <div
      className="rr-rb-body-item"
      id={`rr-rb-body-item-${starNumberString}`}
    >
      <u>{`${starNumber} stars`}</u>
      &nbsp;
      <progress
        className="rr-rb-progress progress"
        max={max}
        value={value}
      />
    </div>
  );
}
// todo look at line 26
function RatingBreakdown() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { ratings, recommended } = metaRatings;

  if (recommended && ratings) {
    const recommendedTrue = Number(recommended.true);
    const recommendedFalse = Number(recommended.false);
    const numberOfValues = recommendedTrue + recommendedFalse;
    const percentOfReviewsRecommendProduct = ((recommendedTrue / numberOfValues) * 100).toFixed(0);

    const one = ratings['1'] || 0;
    const two = ratings['2'] || 0;
    const three = ratings['3'] || 0;
    const four = ratings['4'] || 0;
    const five = ratings['5'] || 0;

    const ratingInfo = [['one', 1, one], ['two', 2, two], ['three', 3, three], ['four', 4, four], ['five', 5, five]];

    return (
      <div className="rr-rating-breakdown">

        <div className="rr-rb-header">
          {percentOfReviewsRecommendProduct}
          % of reviews recommend this product
        </div>

        <div className="rr-rb-body">
          {ratingInfo.map((starNumber) => (
            <RatingBody
              key={starNumber[1]}
              starNumber={starNumber[1]}
              starNumberString={starNumber[0]}
              max={numberOfValues}
              value={starNumber[2]}
            />
          ))}
        </div>
      </div>
    );
  }
  return <div className="loading"> Loading...</div>;
}

export default RatingBreakdown;
