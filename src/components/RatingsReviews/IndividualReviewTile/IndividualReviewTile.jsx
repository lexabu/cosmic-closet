/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import './IndividualReviewTile.scss';
// import axios from 'axios';
import { StarRating } from '../index.js';

function IndividualReviewTile({ review }) {
  const { }
  const {
    count, page, product, results,
  } = revieww;
  // takes in a single review
  return (
    <div className="rr-individual-review-tile">
      <span>
        <StarRating
          rating="5"
        />
        || Verified Purchaser
        ||
        {' '}
        "date"
      </span>
      <div>
        Review Summary
      </div>
      <div>
        Review body
      </div>
      <div>
        “I recommend this product”
      </div>
      <div>
        Response to Review
      </div>
      <span>
        Rating Helpfulness || Report
      </span>
    </div>
  );
}

export default IndividualReviewTile;
