import React from 'react';
import { reviewStore } from '../../../stores.js';
import './RatingBreakdown.scss';

function RatingBreakdown() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { ratings, recommended } = metaRatings;

  if (recommended && ratings) {
    const recommendedTrue = Number(recommended.true);
    const recommendedFalse = Number(recommended.false);
    const numerator = recommendedTrue;
    const denominator = recommendedTrue + recommendedFalse;
    const percentOfReviewsRecommendProduct = ((numerator / denominator) * 100).toFixed(0);

    const one = ratings['1'] || 0;
    const two = ratings['2'] || 0;
    const three = ratings['3'] || 0;
    const four = ratings['4'] || 0;
    const five = ratings['5'] || 0;

    return (
      <div className="rr-rating-breakdown">

        <div className="rr-rb-header">
          {percentOfReviewsRecommendProduct}
          % of reviews recommend this product
        </div>

        <div className="rr-rb-body">
          <div className="rr-rb-body-item" id="five">
            <u>5 stars</u>
            &nbsp;
            <progress className="rr-rb-progress progress" max={denominator} value={five} />
          </div>
          <div className="rr-rb-body-item" id="four">
            <u>4 stars</u>
            &nbsp;
            <progress className="rr-rb-progress progress" max={denominator} value={four} />
          </div>
          <div className="rr-rb-body-item" id="three">
            <u>3 stars</u>
            &nbsp;
            <progress className="rr-rb-progress progress" max={denominator} value={three} />
          </div>
          <div className="rr-rb-body-item" id="two">
            <u>2 stars</u>
            &nbsp;
            <progress className="rr-rb-progress progress" max={denominator} value={two} />
          </div>
          <div className="rr-rb-body-item" id="one">
            <u>1 stars</u>
            &nbsp;
            <progress className="rr-rb-progress progress" max={denominator} value={one} />
          </div>
        </div>

      </div>
    );
  }
  return <div className="loading"> Loading...</div>;
}

export default RatingBreakdown;
