import React from 'react';
import './RatingBreakdown.scss';
import { reviewMetaStore, reviewStore } from '../../../stores.js';

function RatingBreakdown() {
  const metaRatings = reviewMetaStore((state) => state.ratings);
  const { ratings, recommended } = metaRatings;
  console.log('recommended: ', recommended);
  console.log('ratings: ', ratings);

  // need a numerator to be the number of true
  // need the denominator to be the count of true and false

  if (recommended) {
    // percent reccommended
    const recommendedTrue = Number(recommended.true);
    const recommendedFalse = Number(recommended.false);
    const numerator = recommendedTrue;
    const denominator = recommendedTrue + recommendedFalse;
    const percentOfReviewsRecommendProduct = ((numerator / denominator) * 100).toFixed(0);

    // breakdown
    const one = ratings['1'] || 0;
    const two = ratings['2'] || 0;
    const three = ratings['3'] || 0;
    const four = ratings['4'] || 0;
    const five = ratings['5'] || 0;

    // const [one] = Object.values(ratings);

    console.log('one: ', one);

    return (
      <div className="rr-rating-breakdown">

        <div className="rr-rb-header">
          {percentOfReviewsRecommendProduct}
          % of reviews recommend this product
        </div>

        <div className="rr-rb-body">
          <div className="rr-rb-body-item" id="five">
            5 stars &nbsp;
            <progress max={denominator} value={five} />
          </div>
          <div className="rr-rb-body-item" id="four">
            4 stars &nbsp;
            <progress max={denominator} value={four} />
          </div>
          <div className="rr-rb-body-item" id="three">
            3 stars &nbsp;
            <progress max={denominator} value={three} />
          </div>
          <div className="rr-rb-body-item" id="two">
            2 stars &nbsp;
            <progress max={denominator} value={two} />
          </div>
          <div className="rr-rb-body-item" id="one">
            1 stars &nbsp;
            <progress max={denominator} value={one} />
          </div>
        </div>

      </div>
    );
  }
  return <div> Loading... </div>;
}

export default RatingBreakdown;
