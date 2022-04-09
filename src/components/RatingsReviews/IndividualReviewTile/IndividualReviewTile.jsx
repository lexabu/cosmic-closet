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
    photos,
  } = review;
  console.table({
    review_id,
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness,
    photos,
  });
  const localDate = new Date(date).toLocaleDateString();
  // takes in a single review
  return (
    <div className="rr-individual-review-tile">
      <span className="rr-idr-header">
        <StarRating
          rating={rating}
        />
        &nbsp;
        Verified ✓
        &nbsp;
        {reviewer_name}
        &nbsp;
        {localDate}
      </span>
      <div className="rr-idr-summary">
        {summary}
      </div>
      <div className="rr-idr-body">
        {body}
      </div>
      <div className="rr-idr-recommend">
        {((recommend) ? (<span> ✓ I recommend this product </span>) : '')}
      </div>
      <div className="rr-idr-response">
        {((response) ? (
          <div>
            <div> Response: </div>
            <div>
              {' '}
              {response}
              {' '}
            </div>
          </div>
        )
          : '')}
      </div>
      <span className="rr-idr-helpfulness">
        Helpful? Yes (
        {helpfulness}
        ) | Report
      </span>
    </div>
  );
}

export default IndividualReviewTile;
