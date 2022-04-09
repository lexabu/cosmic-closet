/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import './IndividualReviewTile.scss';
// import axios from 'axios';
import { StarRating } from '../index.js';

function IndividualReviewTile({ review }) {
  const {
    review_id,
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness,
    photos, } = review;
  // takes in a single review
  return (
    <div className="rr-individual-review-tile">
      <span>
        <StarRating
          rating={rating}
        />
        Verified Purchaser
        {'            '}
        {reviewer_name}
        ||
        {' '}
        {date}
      </span>
      <div>
        {summary}
      </div>
      <div>
        {body}
      </div>
      <div>
        {((recommend) ? (<span> I recommend this product </span>) : '')}
      </div>
      <div>
        Response to Review
        {((response) ? (<span> response </span>) : '')}
      </div>
      <span>
        Rating Helpfulness || Report
      </span>
    </div>
  );
}

export default IndividualReviewTile;
